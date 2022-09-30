import BluredContainerProjects from '../Layout/BluredContainerProjects';
import s from './ProjectsSection.module.sass';
import ProjectCard from './resources/ProjectCard';
import Image from 'next/image';
// Images
import LimonadaPNG from '../../assets/img/projects/LimonadaPNG.png';
import BooksStore from '../../assets/img/projects/BookStore.png';
import WeatherAPP from '../../assets/img/projects/WeatherAPP.png';
import WeatherAPPV2 from '../../assets/img/projects/WeatherAPPV2PNG.png';
import Portafolio from '../../assets/img/projects/PortafolioPNG.png';

const ProjectsSection = () => {
  return (
    <BluredContainerProjects>
      <h3 className={s.projectsSectionTitle}>
        Projects<span className={s.red}>.</span>
      </h3>
      <div className={s.cardsWrapper}>
        <ProjectCard
          s={s}
          status={'Online'}
          technologies={'SASS - JavaScript - React - Redux - NodeJS - Express - PostgresSQL - Firebase - Nodemailer'}
          gitLink={'https://github.com/AM4772/Henry-PF'}
          deployLink={'https://bookstore-rose.vercel.app/'}
          project={'BookStore'}
        >
          <Image src={BooksStore} className={s.projectImage} priority alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'Online'}
          technologies={`SASS - React - Redux - NodeJS - Express - PostgresSQL`}
          gitLink={'https://github.com/TomasBorquez/PI-Food'}
          deployLink={'https://pi-food-one.vercel.app/'}
          project={'Limonada'}
        >
          <Image src={LimonadaPNG} className={s.projectImage} priority alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'Online'}
          technologies={'JavaScript - React'}
          gitLink={'https://github.com/TomasBorquez/Climate-App'}
          deployLink={'https://tomasborquez.github.io/Climate-App/'}
          project={'WeatherAPP'}
        >
          <Image src={WeatherAPP} className={s.projectImage} priority alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'Already here'}
          technologies={'SASS - TypeScript - React - Redux - NextJS - NodeJS - Express - PostgresSQL'}
          gitLink={'https://github.com/TomasBorquez/PortfolioV2'}
          project={'Portafolio'}
        >
          <Image src={Portafolio} className={s.projectImage} priority alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'Maintenance'}
          technologies={'SASS - TypeScript - React - Redux - NextJS'}
          gitLink={'https://github.com/TomasBorquez/PortfolioV2'}
          project={'WeatherAPPV2'}
        >
          <Image src={WeatherAPPV2} className={s.projectImage} priority alt="" />
        </ProjectCard>
      </div>
    </BluredContainerProjects>
  );
};

export default ProjectsSection;
