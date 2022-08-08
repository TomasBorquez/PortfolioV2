import React from 'react';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import s from './Layout.module.sass'

type Props = {
  title: string
  children: JSX.Element;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

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