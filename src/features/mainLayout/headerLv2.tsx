import { Searching } from '@/components/searching'
import { usePathname } from '@/hooks/usePathname'
import clsx from 'clsx'
import { Layers2, LayoutDashboard, PlusSquare } from 'lucide-react'

export function HeaderLv2() {
  const { lastPathname } = usePathname()

  return (
    <div className="flex items-center justify-between border px-[12rem] py-16 phones:border-none phones:px-32 phones:py-24">
      <Searching className="w-1/4 phones:w-1/2" />
      <div className="flex items-center gap-32">
        <span
          className={clsx('hover:text-primary hover:cursor-pointer', {
            'text-primary': lastPathname === '',
          })}
        >
          <LayoutDashboard size={16} />
        </span>
        <span className="hover:text-primary hover:cursor-pointer">
          <PlusSquare size={16} />
        </span>
        <span
          className={clsx('hover:text-primary hover:cursor-pointer', {
            'text-primary': lastPathname === 'statistics',
          })}
        >
          <Layers2 size={16} />
        </span>
      </div>
    </div>
  )
}
