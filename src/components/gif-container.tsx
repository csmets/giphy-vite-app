import { useContext, useEffect } from "react"
import { GifCard } from "./gif-card"
import { AppContext } from "../providers/providers"
import { useFetchGifImages } from "../services/giphy/hooks"

export const GifContainer = () => {
  const { appData, setAppData } = useContext(AppContext)
  const { loading, data, error } = useFetchGifImages(appData?.search ?? "", appData?.offset ?? 0)

  // handle infinite scroll
  useEffect(() => {
    const onscroll = () => {
      const scrollOffset = 10
      const scrolledTo = (window.scrollY + window.innerHeight) + scrollOffset
      const isReachBottom = document.body.scrollHeight <= scrolledTo
      if (isReachBottom) {
        appData && setAppData({
          ...appData,
          offset: data.length
        })
      }
    };
    window.addEventListener("scroll", onscroll)
    return () => {
      window.removeEventListener("scroll", onscroll)
    };
  }, [data]);


  const skeleton = [...Array(25)].map((_, i) => {
    return (
      <div key={`skelton-${i}`} className="skeleton h-96 w-120"></div>
    )
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
      {data.length > 0 && (
        data.map((image, index) => {
          return <GifCard key={`giphy-card-${index}`} {...image} />
        })
      )}
      {loading && skeleton}
      {error && "Something went wrong"}
      {!data.length && !loading && (
        <div className="hero mt-20 bg-base-100 absolute">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Looks like we've found nothing...</h1>
              <p className="py-6">
                No cute gifs found :'(
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
