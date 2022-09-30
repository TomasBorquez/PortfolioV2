import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NameLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='25px' width='362px'>
      <p>
        <Skeleton/>
      </p>
    </SkeletonTheme>
  );
};

const PositionLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='25px' width='190px'>
      <p>
        <Skeleton/>
      </p>
    </SkeletonTheme>
  );
};

export { NameLoader, PositionLoader };
