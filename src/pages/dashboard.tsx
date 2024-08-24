import Ribbon1 from '@/assets/images/ribbon-1.png'
import Ribbon2 from '@/assets/images/ribbon-2.png'
import { ListDetail, ListNotes } from '@/features/listNotes'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

export type ListNotesType = {
  date: string
  description: string
  id: string
  mood: number
  title: string
}

export default function Dashboard() {
  const storedPost = localStorage.getItem('savedPost') ?? ''
  const list: ListNotesType[] = storedPost === '' ? [] : JSON.parse(storedPost)

  const [menu, setMenu] = useState<string>(list?.[0]?.id ?? '')

  return (
    <div className="scrollbar relative flex h-full w-full gap-32 overflow-auto px-[12rem] py-16 text-primary phones:px-32 phones:py-24">
      <div className="scrollbar overflow-auto-300 flex h-full w-full flex-col justify-between gap-32 pb-32">
        <ListNotes list={list} setMenu={setMenu} menu={menu} />
      </div>
      {list?.length > 0 && menu !== '' && (
        <div className="scrollbar flex h-full w-full overflow-auto text-primary phones:hidden">
          <ListDetail item={list?.find((item) => item?.id === menu)} />
        </div>
      )}
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
