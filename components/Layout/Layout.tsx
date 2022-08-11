import React from 'react';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import s from './Layout.module.sass'
import { useSelector } from '../../store/store';
import { getUserState } from '../../store/slices/userSlice';

type Props = {
  title: string
  children: JSX.Element;
};

export const Layout = ({ children, title }: Props) => {
  const { theme } = useSelector(getUserState);
  let color = theme === 'dark' ? '#1c1c1c' : '#d7d7d7' 
  return (
    <div id={theme === 'dark' ? 'darkTheme' : 'lightTheme'}>
      <Head>
        <title>{title}</title>
      </Head>
      <style>{`body { background-color: ${color}; }`}</style>
      <nav id={s.navbar}>
        <Nav />
      </nav>

      <main id={s.main}>{children}</main>

      <footer>{/* I am the footer */}</footer>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Portfolio | Tomas Borquez'
}