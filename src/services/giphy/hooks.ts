import { useEffect, useState } from "react"
import { FetchGiphyImages, FetchGiphyImagesBySearch } from "./fetch"
import { GiphyImage } from "./types"

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value])

  return debouncedValue
}

export const useFetchGifImages = (search: string, offset: number) => {
  const [loading, setLoadingState] = useState(true)
  const [data, setData] = useState<GiphyImage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [existingSearch, setExistingSearch] = useState<string>("")

  // when search changes set loading true
  useEffect(() => {
    setLoadingState(true)

    if (existingSearch !== search)
    {
      // Clear data when searching for different content
      setData([])
    }
  }, [search, offset])

  useEffect(() => {
    if (search) {
      FetchGiphyImagesBySearch(search, offset)
        .then((images) => {
          // clear existing data
          if (search !== existingSearch) {
            setData(images)
            setExistingSearch(search)
          } else {
            setData([...data, ...images])
          }
          setLoadingState(false)
        })
        .catch(() => {
          setError("Failed to fetch giphy images by searching.")
        })
    } else {
      FetchGiphyImages(offset)
        .then((images) => {
          /*
          * when search has a value and if it's been cleared we should
          * clear existing data for new trending data. If search is always empty we
          * can assume it's trending.
          */
          if (search !== existingSearch) {
            setData(images)
            setExistingSearch(search)
          } else {
            setData([...data, ...images])
          }
          setLoadingState(false)
        })
        .catch(() => {
          setError("Failed to fetch giphy images.")
        })
    }
  }, [search, offset])

  return {
    loading,
    data,
    error,
  }
}
