import BluredContainerProjects from '../Layout/BluredContainerProjects';
import s from './ProjectsSection.module.sass';
import ProjectCard from './resources/ProjectCard';
import Image from 'next/image';
// Images
import Limonada from '../../assets/img/projects/Limonada.gif';

const ProjectsSection = () => {
  return (
    <BluredContainerProjects>
      <h3 className={s.projectsSectionTitle}>
        Projects<span className={s.red}>.</span>
      </h3>
      <div className={s.cardsWrapper}>
        <ProjectCard
          s={s}
          status={'online'}
          technologies={`SASS - React - Redux - NodeJS - Express - PostgresSQL`}
          gitLink={'https://github.com/TomasBorquez/PI-Food'}
          deployLink={'https://pi-food-one.vercel.app/'}
          project={'Limonada'}
        >
          <Image src={Limonada} className={s.projectImage} alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'online'}
          technologies={'React'}
          gitLink={'https://github.com/TomasBorquez/PI-Food'}
          deployLink={'https://pi-food-one.vercel.app/'}
          project={'Limonada'}
        >
          <Image src={Limonada} className={s.projectImage} alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'online'}
          technologies={'React'}
          gitLink={'https://github.com/TomasBorquez/PI-Food'}
          deployLink={'https://pi-food-one.vercel.app/'}
          project={'Limonada'}
        >
          <Image src={Limonada} className={s.projectImage} alt="" />
        </ProjectCard>
        <ProjectCard
          s={s}
          status={'online'}
          technologies={'React'}
          gitLink={'https://github.com/TomasBorquez/PI-Food'}
          deployLink={'https://pi-food-one.vercel.app/'}
          project={'Limonada'}
        >
          <Image src={Limonada} className={s.projectImage} alt="" />
        </ProjectCard>
      </div>
    </BluredContainerProjects>
  );
};

export default ProjectsSection;
