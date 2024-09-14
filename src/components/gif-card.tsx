import { GiphyImage } from "../services/giphy/types";

export const GifCard = ({ title, url, image }: GiphyImage) => {

  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
          width={image.width}
          height={image.height}
          src={image.url}
          alt={image.alt} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title link"><a href={url}>{title}</a></h2>
      </div>
    </div>
  )
}
