import React from "react";
import Image from "next/image";
import Link from 'next/link'
import EnterLogo from '../../assets/img/arrowhite.svg'
import LightBulb from '../../assets/img/icons8-bombilla-globo-50.svg'
import GitHubIcon from '../../assets/img/GitHub-Mark-120px-plus.svg'
import s from './Nav.module.sass'

function Nav() {
  return (
    <nav className={s.navbar}>
      <div className={s.centered}>
          <div className={s.leftie}>
            <div id={s.homeTitle}>
              <Image src={EnterLogo} alt='icono' width="20px" height="20px"/>
              <Link href="/PortfolioV1">
                <a id={s.home} className={s.links}>Tomas Borquez</a>
              </Link>
            </div>
            <Link href="/works">
              <a id={s.works} className={s.links}>Works</a>
            </Link>
            <div id={s.mIcon}>
              <Image src={GitHubIcon} className={s.icon} alt='icono' width="20px" height="20px"/>
              <a id={s.source} className={s.links} href="https://github.com/TomasBorquez/PortfolioV1">Source</a>
            </div>
          </div>
          <div className={s.rightie}>
            <button id={s.themeswitcher}>
              <Image id={s.rIcon} width="22px" height="22px" src={LightBulb} alt='icono'/>
            </button>
          </div>

      </div>
    </nav>
  );
};

export default Nav;