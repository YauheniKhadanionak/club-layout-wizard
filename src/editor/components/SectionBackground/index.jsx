import './styles.css'
import image from './image.png'
import video from './video.mp4'

export const SectionBackground = ({ src, ...rest }) => {
  if (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src))
    return <img className="sectionBackground" src={image} alt="" {...rest} />

  return <video className="sectionBackground" src={video} autoPlay loop playsinline muted {...rest} />
}
