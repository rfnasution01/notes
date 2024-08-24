import { ListNotesType } from '@/pages/dashboard'
import { getMoodEmoji } from '@/utils/formatText'
import dayjs from 'dayjs'

export function ListDetail({ item }: { item: ListNotesType }) {
  return (
    <div className="scrollbar flex h-full w-full flex-col items-start justify-start gap-32 overflow-auto py-32 phones:px-32">
      <div className="z-30 flex h-full w-full flex-col rounded-2x bg-white pl-12 pt-12 shadow-md">
        <div className="flex h-[3.2rem]">
          <div className="w-[3.2rem] border-b border-r" />
          <div className="w-full border-b" />
        </div>
        <div className="scrollbar flex h-full flex-1 overflow-auto">
          <div className="w-[3.2rem] border-r" />
          <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-auto p-32">
            <p className="font-sacramento text-[4rem] font-bold text-primary">
              {item?.title} - {getMoodEmoji(item?.mood)}
            </p>
            <p style={{ lineHeight: '130%' }}>{item?.description}</p>
            <p className="text-end text-secondary">
              {dayjs(item?.date).format('MMMM DD, YYYY')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
