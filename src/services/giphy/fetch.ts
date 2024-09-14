import { GiphyImage } from "./types"

function transformImageData(rawImagesResponseData: any): GiphyImage[] {
  const images = rawImagesResponseData?.data?.map((image: any): GiphyImage => {
    // favouring lower quality image for faster load times rather than original size
    const performantImage = image?.images?.downsized
    const title = image?.title
    let alt = ""

    if (title) {
      alt = `Image of ${title} from Giphy`
    }

    return {
      title,
      url: image?.url || "",
      image: {
        width: performantImage.width,
        height: performantImage.height,
        url: performantImage.url,
        alt
      }
    }
  })

  return images
}

export async function FetchGiphyImages(offset: number): Promise<GiphyImage[]> {
  try {
    const params = new URLSearchParams({
      offset: offset.toString()
    })
    const response = await fetch(`/api/trending?${params.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch giphy images")
    }

    const result = await response.json()

    return transformImageData(result) ?? []
  } catch (error) {
    console.error(error)
  }
  return []
}

export async function FetchGiphyImagesBySearch(search: string, offset: number): Promise<GiphyImage[]> {
  try {
    const params = new URLSearchParams({
      q: search,
      offset: offset.toString()
    })

    const response = await fetch(`/api/search?${params}`)

    if (!response.ok) {
      throw new Error("Failed to fetch giphy images")
    }

    const result = await response.json()

    return transformImageData(result) ?? []
  } catch (error) {
    console.error(error)
  }
  return []
}
