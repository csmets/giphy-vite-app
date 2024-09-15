
export const trendingEndpoint = async (req, res) => {
  const apiKey = process.env.API_KEY

  const offset = req.query?.offset ?? 0
  const limit = req.query?.limit ?? 25

  const uri = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`

  try {
    const response = await fetch(uri)
    if (!response.ok) {
      throw new Error(`Failed to request giphy API /trending`)
    }

    const responseData = await response.json()

    res.status(200).json(responseData)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      "error": "Failed to request giphy API"
    })
  }
}

export const searchEndpoint = async (req, res) => {
  const apiKey = process.env.API_KEY

  const search = req.query?.q ?? ""
  const offset = req.query?.offset ?? 0
  const limit = req.query?.limit ?? 25

  const uri = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${offset}`

  try {
    const response = await fetch(uri)
    if (!response.ok) {
      throw new Error(`Failed to request giphy API /trending`)
    }

    const responseData = await response.json()

    res.status(200).json(responseData)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      "error": "Failed to request giphy API"
    })
  }
}