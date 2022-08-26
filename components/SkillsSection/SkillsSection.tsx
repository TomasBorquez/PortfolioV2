import React from 'react';
import s from './SkillsSection.module.sass';
import BluredContainer from '../Layout/BluredContainer';
import SkillCard from './resources/SkillCard';
import Image from 'next/image';
// Images
import ReactSVG from '../../assets/img/skills/React.svg';
import NextSVG from '../../assets/img/skills/Next.svg';
import Redux from '../../assets/img/skills/Redux.svg';
import Typescript from '../../assets/img/skills/Typescript.svg';
import Node from '../../assets/img/skills/Node.svg';
import Mongo from '../../assets/img/skills/Mongo.svg';
import Express from '../../assets/img/skills/Express.svg';
import GraphQL from '../../assets/img/skills/Graph.svg';
import Jest from '../../assets/img/skills/Jest.svg';
import Cypress from '../../assets/img/skills/Cypress.svg';
import Testing from '../../assets/img/skills/Testing.svg';
import SQL from '../../assets/img/skills/SQL.svg';

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
          <SkillCard s={s} skill={'React'}>
            <Image src={ReactSVG} alt="" />
          </SkillCard>
          <SkillCard s={s} skill={'Next'}>
            <Image src={NextSVG} alt="" />
          </SkillCard>
          <SkillCard s={s} skill={'Redux'}>
            <Image src={Redux} alt="" />
          </SkillCard>
          <SkillCard s={s} skill={'Typescript'}>
            <Image src={Typescript} alt="" />
          </SkillCard>
        </div>
      </div>

      <div>
        <div className={s.skillsTitle} id={s.nextTitle}>
          <p className={s.backend}>Back-end</p>
        </div>
        <div className={s.cardsWrapper}>
          <SkillCard s={s} skill={'NodeJs'}>
            <Image src={Node} alt="" />
          </SkillCard>
          <SkillCard s={s} skill={'ExpressJs'}>
            <Image src={Express} alt="" />
          </SkillCard>
          <SkillCard s={s} skill={'PostgreSQL'}>
            <Image src={SQL} alt="" />
          </SkillCard>
        </div>
      </div>

      <div>
        <div className={s.skillsTitle} id={s.nextTitle}>
          <p className={s.tests}>Other</p>
        </div>
        <div className={s.cardsWrapper}>
          <SkillCard s={s} skill={'Jest'}>
            <Image src={Jest} alt="" />
          </SkillCard>
        </div>
      </div>
    </BluredContainer>
  );
};

export default SkillsSection;
