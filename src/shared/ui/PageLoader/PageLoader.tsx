import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

export default PageLoader;
