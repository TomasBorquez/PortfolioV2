import React from 'react';
import s from './SkillsSection.module.sass';
import BluredContainer from '../Layout/BluredContainer';
import SkillCard from './resources/SkillCard';
import Image from 'next/image';
// Images
import ReactSVG from '../../assets/img/skills/react.svg';
import NextSVG from '../../assets/img/skills/nextjs.svg';
import HTML from '../../assets/img/skills/html.svg';
import CSS from '../../assets/img/skills/css.svg';
import SASS from '../../assets/img/skills/sass.svg';
import Redux from '../../assets/img/skills/redux.svg';
import TypeScript from '../../assets/img/skills/typescript.svg';
import JavaScript from '../../assets/img/skills/javascript.svg';
import Node from '../../assets/img/skills/nodejs.svg';
import Express from '../../assets/img/skills/expressjs.svg';
import Sequilize from '../../assets/img/skills/sequilize.svg';
import Jest from '../../assets/img/skills/jest.svg';
import PostSQL from '../../assets/img/skills/postsql.svg'
import GitHub from '../../assets/img/skills/github.svg'
import Photoshop from '../../assets/img/skills/photoshop.svg'
import ThreeJS from '../../assets/img/skills/threejs.svg'

const SkillsSection = () => {
  return (
    <BluredContainer>
      <h3 className={s.skillSectionTitle}>
        Skills<span className={s.red}>.</span>
      </h3>
      <div>
        <div className={s.skillsTitle}>
          <p className={s.frontend}>Front-end</p>
        </div>
        <div className={s.cardsWrapper}>
          <SkillCard s={s} skill={'HTML'}>
            <div className={s.longaniza}>
              <Image src={HTML} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'CSS'}>
            <div className={s.longaniza}>
              <Image src={CSS} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'SASS'}>
            <div className={s.longaniza}>
              <Image src={SASS} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'JavaScript'}>
            <div className={s.longaniza}>
              <Image src={JavaScript} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'TypeScript'}>
            <div className={s.longaniza}>
              <Image src={TypeScript} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'ReactJS'}>
            <div className={s.longaniza}>
              <Image src={ReactSVG} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'NextJS'}>
            <div className={s.longaniza}>
              <Image src={NextSVG} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'Redux'}>
            <div className={s.longaniza}>
              <Image src={Redux} alt="" />
            </div>
          </SkillCard>
        </div>
      </div>

      <div>
        <div className={s.skillsTitle} id={s.nextTitle}>
          <p className={s.backend}>Back-end</p>
        </div>
        <div className={s.cardsWrapper}>
          <SkillCard s={s} skill={'NodeJs'}>
            <div className={s.longaniza}>
              <Image src={Node} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'ExpressJs'}>
            <div className={s.longaniza}>
              <Image src={Express} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'Sequilize'}>
            <div className={s.longaniza}>
              <Image src={Sequilize} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'PostgreSQL'}>
            <div className={s.longaniza}>
              <Image src={PostSQL} alt="" />
            </div>
          </SkillCard>
        </div>
      </div>

      <div>
        <div className={s.skillsTitle} id={s.nextTitle}>
          <p className={s.tests}>Other</p>
        </div>
        <div className={s.cardsWrapper}>
          <SkillCard s={s} skill={'Jest'}>
            <div className={s.longaniza}>
              <Image src={Jest} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'GitHub'}>
            <div className={s.longaniza}>
              <Image src={GitHub} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'ThreeJS'}>
            <div className={s.longaniza}>
              <Image src={ThreeJS} alt="" />
            </div>
          </SkillCard>
          <SkillCard s={s} skill={'Photoshop'}>
            <div className={s.longaniza}>
              <Image src={Photoshop} alt="" />
            </div>
          </SkillCard>
        </div>
      </div>
    </BluredContainer>
  );
};

export default SkillsSection;
