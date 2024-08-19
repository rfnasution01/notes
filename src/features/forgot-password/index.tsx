import { useState } from 'react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewPasswordSchema, RecoverySchema } from './recoverySchema'
import CryptoJS from 'crypto-js'
import toast, { Toaster } from 'react-hot-toast'
import { FormChangePassword } from './formChangePassword'
import { FormRecoveryWord } from './formRecoveryWord'
import { useNavigate } from 'react-router-dom'

const SECRET_KEY = import.meta.env.VITE_BASE_SECRET_KEY

export default function ForgotPassword() {
  const navigate = useNavigate()

  const [menu, setMenu] = useState<string>('')

  const formRecoveryword = useForm<zod.infer<typeof RecoverySchema>>({
    resolver: zodResolver(RecoverySchema),
    defaultValues: {},
  })

  const formNewPassword = useForm<zod.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {},
  })

  const loginData = localStorage.getItem('savedUser') ?? ''
  const loginDecrypt =
    loginData === ''
      ? {}
      : CryptoJS.AES.decrypt(loginData, SECRET_KEY).toString(CryptoJS.enc.Utf8)
  const loginJSON = JSON.parse(loginDecrypt)

  const handleCheckRecoveryWord = () => {
    const values = formRecoveryword.watch()
    if (values?.word === loginJSON?.word) {
      formRecoveryword.reset()

      toast.success('Recovery word is correct!')
      setTimeout(() => {
        setMenu('change-password')
      }, 1000)
    } else {
      toast.error('Recovery word is wrong!')
    }
  }

  const handleChangePassword = () => {
    const values = formNewPassword?.watch()

    const body = {
      username: loginJSON.username,
      word: loginJSON.word,
      password: values?.password,
    }
    if (values?.password === values?.repeatPassword) {
      // Enkripsi data sebelum menyimpannya ke localStorage
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(body),
        SECRET_KEY,
      ).toString()
      localStorage.setItem('savedUser', encryptedData)

      toast.success('Change password is success!')
      formNewPassword.reset()
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }
  }

  return (
    <div className="scrollbar bg-primary text=white flex h-screen w-full items-center justify-center overflow-auto text-[2rem] phones:text-[2.4rem]">
      <div className="text-primary flex w-1/4 flex-col gap-32 rounded-2x bg-white p-32 shadow phones:w-4/5">
        <p className="text-[2.8rem]">Forgot Password</p>
        {menu === '' ? (
          <>
            <p className="font-sans">
              Enter the recovery word to change the password
            </p>
            <FormRecoveryWord
              form={formRecoveryword}
              handleCheckRecoveryWord={handleCheckRecoveryWord}
            />
          </>
        ) : (
          <>
            <p className="font-sans">Enter the new password</p>
            <FormChangePassword
              form={formNewPassword}
              handleChangePassword={handleChangePassword}
            />
          </>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}
