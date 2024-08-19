import Image404 from '@/assets/images/404.png'
import { ArrowLeftToLine } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ComingSoonPage() {
  return (
    <div className="scrollbar bg-primary flex min-h-screen items-center justify-center overflow-y-auto font-sans text-[2rem] text-white phones:text-[2.4rem]">
      <div className="flex w-5/6 items-center gap-64 rounded-2x p-32 phones:w-full phones:flex-col-reverse">
        <div className="flex w-3/5 flex-col gap-64 phones:w-full">
          <p
            className="text-[8rem] text-white phones:text-center phones:text-[5rem]"
            style={{ lineHeight: '130%' }}
          >
            Sorry, the page you were looking for was not found
          </p>
          <p
            className="text-[3.2rem] text-white phones:text-center"
            style={{ lineHeight: '130%' }}
          >
            Please double check the URL you entered or return to the menu.
          </p>
          <div className="flex">
            <Link
              to="/"
              className="text-primary flex items-center gap-12 rounded-2xl bg-white px-24 py-12 hover:bg-opacity-80"
            >
              <ArrowLeftToLine size={16} />
              <p>Back to Home</p>
            </Link>
          </div>
        </div>
        <div className="flex w-2/5 items-center justify-center phones:w-2/3">
          <img src={Image404} alt="404" className="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  )
}
