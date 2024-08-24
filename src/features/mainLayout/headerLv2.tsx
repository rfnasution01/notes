import { DialogKonfirmasi } from '@/components/dialogs'
import { Searching } from '@/components/searching'
import { useMobile } from '@/hooks/useMobile'
import { usePathname } from '@/hooks/usePathname'
import { getMood, getMoodEmoji } from '@/utils/formatText'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Layers2, LayoutDashboard, PlusSquare } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

export function HeaderLv2() {
  const { lastPathname } = usePathname()
  const { isMobile } = useMobile()

  const [menu, setMenu] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [mood, setMood] = useState<number>(3) // Default mood value

  const handleShare = () => {
    const newPost = {
      id: uuidv4(), // Generate a random ID
      title,
      description,
      date: dayjs(),
      mood: mood, // Store the mood value
    }

    // Get the existing posts from localStorage
    const existingPosts = JSON.parse(localStorage.getItem('savedPost') || '[]')

    // Add the new post to the array
    const updatedPosts = [...existingPosts, newPost]

    // Save the updated array back to localStorage
    localStorage.setItem('savedPost', JSON.stringify(updatedPosts))

    // Clear input fields and close the dialog
    setTitle('')
    setDescription('')
    setMood(3) // Reset the mood to default
    setIsShow(false)
    setMenu('')
    toast.success('Add new post is success!')
  }

  return (
    <div className="flex border px-[12rem] py-16 phones:border-none phones:p-24">
      <div className="flex w-full items-center justify-between px-32 phones:px-24">
        <Searching className="w-1/4 phones:w-1/2" />
        <div className="flex items-center gap-32">
          <span
            className={clsx('hover:cursor-pointer hover:text-primary', {
              'text-primary': lastPathname === '',
            })}
          >
            <LayoutDashboard size={16} />
          </span>
          <span
            onClick={() => setIsShow(true)}
            className="hover:cursor-pointer hover:text-primary"
          >
            <PlusSquare size={16} />
          </span>
          <span
            className={clsx('hover:cursor-pointer hover:text-primary', {
              'text-primary': lastPathname === 'statistics',
            })}
          >
            <Layers2 size={16} />
          </span>
        </div>
        <DialogKonfirmasi
          isOpen={isShow}
          setIsOpen={setIsShow}
          isMobile={isMobile}
          headerTitle={
            <p className="border-b-2 pb-16 font-sacramento text-[2.4rem] font-light">
              Create New Post
            </p>
          }
          textContent={
            <div className="flex w-full flex-col gap-32 text-primary">
              {menu === '' ? (
                <>
                  <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full font-sans outline-none focus:outline-none"
                  />
                  <textarea
                    placeholder="Share your thoughts"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="scrollbar h-[20vh] w-full resize-none overflow-auto border-none font-sans outline-none"
                  />
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setMenu('mood')}
                      className="rounded-2xl border px-24 py-12 font-sans shadow hover:bg-primary hover:text-white"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full flex-col items-center">
                    <label className="text-4xl mb-4 font-sans">
                      {getMoodEmoji(mood)} {getMood(mood)}
                    </label>
                    <input
                      type="range"
                      value={mood}
                      min={0}
                      max={5}
                      onChange={(e) => setMood(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={handleShare}
                      className="rounded-2xl border px-24 py-12 font-sans shadow hover:bg-primary hover:text-white"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          }
        />
      </div>
    </div>
  )
}
