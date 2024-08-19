import { createBrowserRouter, redirect } from 'react-router-dom'
import { LoginPage } from './loadables'
import Cookies from 'js-cookie'
import ComingSoonPage from '@/pages/comingSoonPage'

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
    loader: async () => {
      const jwtTokenPayload = Cookies.get('jwtToken')

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
