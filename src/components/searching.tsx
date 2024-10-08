import { Search } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'

export function Searching({
  className,
  setPageNumber,
  setSearch,
  search,
}: {
  className?: string
  setPageNumber?: Dispatch<SetStateAction<number>>
  setSearch?: Dispatch<SetStateAction<string>>
  search?: string
}) {
  const [query, setQuery] = useState<string>('')

  const handleClick = () => {
    setPageNumber(1)
    setSearch(query)
  }
  return (
    <div className={`flex ${className}`}>
      <input
        type="text"
        className="w-full rounded-bl-2xl rounded-tl-2xl border border-gray-300 px-16 py-12 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-full"
        placeholder={search ?? 'Search'}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <button
        className={`bg-primary px-12 text-[2.4rem] text-white`}
        type="button"
        style={{
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
        onClick={() => handleClick()}
      >
        <Search size={16} />
      </button>
    </div>
  )
}
