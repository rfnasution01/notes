import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from './signupSchema'
import { useState } from 'react'
import toast from 'react-hot-toast'
import CryptoJS from 'crypto-js'
import { useNavigate } from 'react-router-dom'

const SECRET_KEY = import.meta.env.VITE_BASE_SECRET_KEY

export function useSignUp() {
  const navigate = useNavigate()

  const form = useForm<zod.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {},
  })

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const handleSubmitSignup = () => {
    const values = form.watch()
    const body = {
      username: values?.username,
      word: values?.word,
      password: values?.password,
    }

    if (isShow && isSubmit) {
      // Enkripsi data sebelum menyimpannya ke localStorage
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(body),
        SECRET_KEY,
      ).toString()
      localStorage.setItem('savedUser', encryptedData)

      toast.success('Sign up account is success!')
      setIsShow(false)
      setIsSubmit(false)
      form.reset()
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }
  }

  return {
    form,
    isShow,
    isSubmit,
    setIsShow,
    setIsSubmit,
    handleSubmitSignup,
  }
}
