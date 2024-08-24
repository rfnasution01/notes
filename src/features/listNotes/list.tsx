import dayjs from 'dayjs'
import Clip from '@/assets/images/clip.png'
import { ListNotesType } from '@/pages/dashboard'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import { useMobile } from '@/hooks/useMobile'
import { useNavigate } from 'react-router-dom'

export function ListNotes({
  list,
  menu,
  setMenu,
}: {
  list: ListNotesType[]
  menu: string
  setMenu: Dispatch<SetStateAction<string>>
}) {
  const { isMobile } = useMobile()
  const navigate = useNavigate()

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-auto py-32 pl-32">
      <div className="flex h-full flex-col overflow-visible">
        {list?.map((item, idx) => (
          <div key={idx} className="relative z-10 pb-32">
            <img
              src={Clip}
              alt="Clip"
              className="absolute -left-[1.1rem] top-[2rem] h-[3rem] w-[2.5rem]"
              loading="lazy"
            />
            <div
              onClick={() => {
                setMenu(item?.id)
                localStorage.setItem('menuID', item?.id)

                if (isMobile) {
                  navigate('detail')
                }
              }}
              className={clsx(
                'z-10 flex flex-col gap-16 rounded-2x border-r-4 bg-white py-24 pl-32 pr-24 shadow-md',
                {
                  'border-primary': item?.id === menu,
                  'border-transparent hover:cursor-pointer hover:border-primary':
                    item?.id !== menu,
                },
              )}
            >
              <p className="font-sacramento text-[2.8rem] font-bold">
                {item?.title}
              </p>
              <p className="font-sans font-light text-secondary">
                {dayjs(item?.date).format('MMMM DD, YYYY')}
              </p>
              <p className="line-clamp-3 font-sans">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
