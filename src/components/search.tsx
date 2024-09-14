import { useContext, useEffect, useState } from "react"
import { AppContext } from "../providers/providers"
import { useDebounce } from "../services/giphy/hooks"

export const Search = () => {
  const { setAppData } = useContext(AppContext)
  const [search, setSearch] = useState<string>("")
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    setAppData({
      search: debouncedSearch,
      offset: 0
    })
  }, [debouncedSearch])

  return (
    <div className="p-12 flex justify-center w-full">
      <label className="input input-bordered flex items-center gap-2 w-96">
        <input type="text" className="grow" placeholder="Search" value={search} onChange={(e) => {
          const value = e.target.value
          setSearch(value)
        }} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>

    </div>
  )
}
