import { ListDetail } from '@/features/listNotes'
import { ListNotesType } from './dashboard'

export default function DetailPost() {
  const menuID = localStorage?.getItem('menuID') ?? ''
  const storedPost = localStorage.getItem('savedPost') ?? ''
  const list: ListNotesType[] = storedPost === '' ? [] : JSON.parse(storedPost)

  return (
    <div className="scrollbar flex h-full w-full overflow-auto text-primary">
      <ListDetail item={list?.find((item) => item?.id === menuID)} />
    </div>
  )
}
