import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from './loginSchema'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_BASE_SECRET_KEY

export function useLogin() {
  const navigate = useNavigate()

  const form = useForm<zod.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {},
  })

  const loginData = localStorage.getItem('savedUser') ?? ''
  const loginDecrypt =
    loginData === ''
      ? {}
      : CryptoJS.AES.decrypt(loginData, SECRET_KEY).toString(CryptoJS.enc.Utf8)
  const loginJSON = JSON.parse(loginDecrypt)

  const handleSubmitLogin = () => {
    const values = form.watch()

    if (
      loginJSON?.username === values.username &&
      loginJSON.password === values.password
    ) {
      // Generate token
      const token = nanoid() // Menggunakan nanoid untuk menghasilkan token unik
      Cookies.set('token', token)
      localStorage.setItem('token', token)
      form.reset()

      toast.success('Login berhasil!')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } else {
      toast.error('Username or password is wrong!')
    }
  }

  return {
    form,
    handleSubmitLogin,
  }
}
