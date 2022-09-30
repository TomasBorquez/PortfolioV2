import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BioTextLoader = () => {
  return (
    <SkeletonTheme
      baseColor="#202020"
      highlightColor="#444"
    >
      <Skeleton width='96.9%'/>
      <Skeleton count={9}/>
    </SkeletonTheme>
  );
};

export default BioTextLoader;
