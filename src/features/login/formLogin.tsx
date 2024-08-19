import { Form } from '@/components/form'
import { useLogin } from './useLogin'
import { FormInputText } from '@/components/forms'
import { Eye, EyeOff, Lock, User2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function FormLogin() {
  const { form } = useLogin()

  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <Form {...form}>
      <form className="flex w-3/5 flex-col gap-32 phones:w-4/5">
        <FormInputText
          name="username"
          form={form}
          placeholder="Username"
          type="text"
          prefix={<User2 size={16} />}
          className="text-primary w-full shadow-md"
        />

        <div className="flex flex-col gap-16">
          <FormInputText
            name="password"
            form={form}
            placeholder="Password"
            suffix={
              <span
                onClick={() => {
                  setIsShow(!isShow)
                }}
              >
                {isShow ? <Eye size={16} /> : <EyeOff size={16} />}
              </span>
            }
            prefix={<Lock size={16} />}
            type={isShow ? 'text' : 'password'}
            className="text-primary shadow-md"
          />
          <div className="flex justify-end">
            <Link
              to="forgot-password"
              className="text-primary underline hover:text-indigo-500"
            >
              Forgotten Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-primary rounded-2xl px-24 py-12 hover:bg-opacity-80 phones:bg-white"
        >
          Submit
        </button>
        <p className="text-center font-nunito">OR</p>
        <Link
          to="/signup"
          className="border-primary text-primary hover:bg-primary rounded-2xl border px-24 py-12 text-center hover:text-white phones:border-white phones:text-white"
        >
          Sign Up
        </Link>
      </form>
    </Form>
  )
}
