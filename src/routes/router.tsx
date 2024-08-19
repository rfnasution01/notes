import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  DashboardLayout,
  ForgotPasswordPage,
  LoginLayout,
  LoginPage,
  MainLayout,
  SignupPage,
} from './loadables'
import Cookies from 'js-cookie'
import ComingSoonPage from '@/pages/comingSoonPage'

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    loader: async () => {
      const jwtTokenPayload = Cookies.get('token')

      if (!jwtTokenPayload) {
        return redirect('/login')
      }

      return null
    },
    children: [
      {
        path: '',
        element: <DashboardLayout />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginLayout />,
    loader: async () => {
      const jwtTokenPayload = Cookies.get('token')

      if (jwtTokenPayload) {
        return redirect('/')
      }

      return null
    },
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: 'sign-up',
        element: <SignupPage />,
      },
    ],
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />,
    loader: async () => {
      const jwtTokenPayload = Cookies.get('token')

      if (jwtTokenPayload) {
        return redirect('/')
      }

      return null
    },
  },
  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
