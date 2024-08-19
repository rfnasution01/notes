import { Form } from '@/components/form'
import { FormInputText } from '@/components/forms'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

export function FormChangePassword({
  form,
  handleChangePassword,
}: {
  form: UseFormReturn
  handleChangePassword: () => void
}) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isShowRepeat, setIsShowRepeat] = useState<boolean>(false)

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-32"
        onSubmit={form.handleSubmit(handleChangePassword)}
      >
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
          className="text-primary"
        />
        <FormInputText
          name="repeatPassword"
          form={form}
          placeholder="Password"
          suffix={
            <span
              onClick={() => {
                setIsShowRepeat(!isShowRepeat)
              }}
            >
              {isShowRepeat ? <Eye size={16} /> : <EyeOff size={16} />}
            </span>
          }
          prefix={<Lock size={16} />}
          type={isShowRepeat ? 'text' : 'password'}
          className="text-primary"
        />
        <button
          type="submit"
          className="bg-primary rounded-2xl px-24 py-12 text-white hover:bg-opacity-80"
        >
          Submit
        </button>
      </form>
    </Form>
  )
}
