import './index.css'

const ThumbnailItem = props => {
  const {imagesList, showImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const currentImage = isActive ? 'current-images' : ''

  const showUniqueImage = () => {
    showImage(id)
  }

  return (
    <li>
    <button className="button" type="button">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`images ${currentImage}`}
        onClick={showUniqueImage}
      />
    </button>
    </li>
  
  )
}

export default ThumbnailItem
