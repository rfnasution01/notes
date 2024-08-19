import { FormLogin } from './formLogin'

export default function LoginPage() {
  return (
    <div className="scrollbar bg-primary relative flex h-screen items-center justify-center overflow-hidden text-[2rem] text-white phones:text-[2.4rem]">
      {/* Left Section */}
      <div className="flex h-full w-full p-64">
        <div className="flex h-full w-full flex-col justify-between gap-32">
          <p className="font-helvetica text-[12rem]">Login</p>
          <p className="font-sacramento text-[4rem] tracking-1.25">Notes</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-primary relative z-10 flex w-full flex-col items-center justify-center">
        <FormLogin />
      </div>

      {/* Circle Shape */}
      <div className="absolute right-0 top-0 h-[160rem] w-[150rem] -translate-y-1/4 translate-x-1/4 transform rounded-full bg-white"></div>
    </div>
  )
}
