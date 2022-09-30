import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BioTitleLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='23px' width='100px'>
        <Skeleton/>
    </SkeletonTheme>
  );
};

const CertificateLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='18px' width='225px'>
        <Skeleton/>
    </SkeletonTheme>
  );
};

const LinkLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='30px' width='30px'>
        <Skeleton circle={true}/>
    </SkeletonTheme>
  );
};

const DownloadLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height='100%' width='100%'>
        <Skeleton />
    </SkeletonTheme>
  );
};

export { BioTitleLoader, LinkLoader, DownloadLoader, CertificateLoader };
