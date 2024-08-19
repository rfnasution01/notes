import { Form } from '@/components/form'
import { FormInputText } from '@/components/forms'
import { Eye, EyeOff, Key, Lock, User2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignUp } from './useSignUp'
import { DialogKonfirmasi } from '@/components/dialogs'
import { useMobile } from '@/hooks/useMobile'
import { privacyPolicy, termsAndConditions } from './dataTerm'

export default function FormSignUp() {
  const {
    form,
    isShow: isOpen,
    setIsShow: setIsOpen,
    isSubmit,
    setIsSubmit,
    handleSubmitSignup,
  } = useSignUp()
  const { isMobile } = useMobile()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitSignup)}
          className="flex w-3/5 flex-col gap-32 phones:w-4/5"
        >
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
              name="word"
              form={form}
              placeholder="Word to Recover Password"
              type="text"
              prefix={<Key size={16} />}
              className="text-primary w-full shadow-md"
            />
            <p className="text-red-500">
              Note: use this word to recover password
            </p>
          </div>

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
                to="/login"
                className="text-primary hover:text-indigo-500 phones:text-white"
              >
                Have an account? <span className="underline">Login</span>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            onClick={async () => {
              const isValid = await form.trigger()

              if (isValid) {
                setIsOpen(true)
              }
            }}
            className="bg-primary phones:text-primary rounded-2xl px-24 py-12 text-white hover:bg-opacity-80 phones:bg-white"
          >
            Submit
          </button>
        </form>
      </Form>
      <DialogKonfirmasi
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isMobile={isMobile}
        headerTitle={<p>Confirmation</p>}
        textContent={
          !isSubmit ? (
            <div className="scrollbar flex h-full flex-col gap-32 overflow-auto text-[2rem] phones:text-[2.4rem]">
              <div className="flex flex-col gap-24 font-sans">
                <p className="text-[2.2rem] font-bold">Term and Condition</p>
                {termsAndConditions.map((item, index) => (
                  <div key={index}>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
                <p className="mt-4 text-[2.2rem] font-bold">Privacy Policy</p>
                {privacyPolicy.map((item, index) => (
                  <div key={index}>
                    <p className="font-semibold">{item.title}</p>
                    <div>
                      {typeof item.description === 'object' ? (
                        Object.values(item.description).map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))
                      ) : (
                        <p>{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-12">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked(e.target.checked)
                  }}
                />
                <p>Accepted</p>
              </div>
            </div>
          ) : (
            <p>All the data I entered is correct</p>
          )
        }
        buttonContent={
          <div className="flex justify-end gap-16">
            <button
              onClick={() => {
                setIsOpen(false)
                setIsSubmit(false)
              }}
              className="rounded-2xl bg-red-500 px-24 py-12 text-white hover:bg-opacity-80"
            >
              Back
            </button>
            <button
              disabled={!isChecked}
              onClick={() => {
                setIsSubmit(true)
                handleSubmitSignup()
              }}
              className="rounded-2xl bg-green-500 px-24 py-12 text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-70"
            >
              {isSubmit ? 'Signup' : 'Submit'}
            </button>
          </div>
        }
      />
    </>
  )
}
