import { createBrowserRouter, redirect } from 'react-router-dom'
import { LoginLayout, LoginPage, SignupPage } from './loadables'
import Cookies from 'js-cookie'
import ComingSoonPage from '@/pages/comingSoonPage'

export const router = createBrowserRouter([
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
    path: '*',
    element: <ComingSoonPage />,
  },
])
