import { HeaderLv1, HeaderLv2 } from '@/features/mainLayout'
import { usePathname } from '@/hooks/usePathname'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const { firstPathname } = usePathname()
  return (
    <div className="scrollbar flex h-screen flex-col overflow-auto text-[2rem] phones:text-[2.4rem]">
      <HeaderLv1 />
      {firstPathname === '' && <HeaderLv2 />}
      <div className="scrollbar flex flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}
