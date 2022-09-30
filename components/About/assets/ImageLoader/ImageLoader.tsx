import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ImageLoader = () => {
  return (
    <SkeletonTheme width='100%' height='100%' baseColor="#202020" highlightColor="#444">
        <Skeleton circle={true}/>
    </SkeletonTheme>
  )
}

export default ImageLoader