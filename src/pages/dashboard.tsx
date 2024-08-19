import Ribbon1 from '@/assets/images/ribbon-1.png'
import Ribbon2 from '@/assets/images/ribbon-2.png'
import { Toaster } from 'react-hot-toast'

export default function Dashboard() {
  return (
    <div className="text-primary scrollbar relative flex h-full w-full gap-32 overflow-auto">
      <div className="scrollbar overflow-auto-300 flex h-full w-full flex-col justify-between gap-32">
        <p className="font-helvetica text-[12rem]">lorem</p>
      </div>
      <div className="text-primary scrollbar justify-cente relative z-10 flex h-full w-full flex-col items-center overflow-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus,
        aperiam qui beatae amet consequuntur ipsum perspiciatis repellendus
        ipsam, blanditiis reiciendis harum dolores enim perferendis eligendi
        necessitatibus tempore. Asperiores, hic!
      </div>
      <img
        src={Ribbon1}
        className="absolute left-0 top-0 h-full w-2/12"
        alt="ribbon"
        loading="lazy"
      />
      <div className="absolute right-0 top-0 h-full w-2/12 overflow-hidden">
        <img
          src={Ribbon2}
          className="absolute right-0 top-0 h-full w-full rotate-45"
          alt="ribbon"
          loading="lazy"
        />
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}
