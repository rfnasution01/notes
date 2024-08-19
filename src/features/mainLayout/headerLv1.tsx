import { DialogKonfirmasi } from '@/components/dialogs'
import { useMobile } from '@/hooks/useMobile'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataNavigasi } from './datanavigasi'
import clsx from 'clsx'
import { convertToSlug } from '@/utils/formatText'
import { usePathname } from '@/hooks/usePathname'

export function HeaderLv1() {
  const { isMobile } = useMobile()
  const { firstPathname } = usePathname()

  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between bg-white px-32 py-16 shadow">
      <span
        onClick={() => {
          setIsShow(true)
        }}
        className="hover:text-primary transition-colors duration-300 hover:cursor-pointer"
      >
        <AlignJustify size={20} />
      </span>
      <p className="font-sacramento text-[4rem] tracking-1.25 phones:text-[2.8rem]">
        Notes
      </p>
      <Link to="/">
        <img src="/logo.png" className="w-[4rem]" loading="lazy" />
      </Link>
      <DialogKonfirmasi
        isOpen={isShow}
        setIsOpen={setIsShow}
        headerTitle={
          <div className="text-primary flex items-center gap-16 border-b-2 pb-16">
            <img
              src="/logo.png"
              className="w-[4rem]"
              alt="logo"
              loading="lazy"
            />
            <p className="font-mono text-[2.8rem]">Notes</p>
          </div>
        }
        position="left"
        width={isMobile ? '60%' : '20%'}
        textContent={
          <div className="flex flex-col gap-32 pt-64">
            {DataNavigasi?.map((item, idx) => (
              <Link
                to={
                  item?.name === 'dashboard' ? '/' : convertToSlug(item?.name)
                }
                key={idx}
                className={clsx(
                  'hover:text-primary flex items-center gap-16 font-sans text-[2.4rem] transition-colors duration-300',
                  {
                    'text-primary':
                      convertToSlug(item?.name) === firstPathname ||
                      (convertToSlug(item?.name) === 'dashboard' &&
                        firstPathname === '') ||
                      (convertToSlug(item?.name) === 'dashboard' &&
                        firstPathname === 'statistics'),
                  },
                )}
              >
                <span>{item?.icon}</span>
                <p>{item?.name}</p>
              </Link>
            ))}
          </div>
        }
        className="transition-all duration-300 ease-in-out"
      />
    </div>
  )
}
