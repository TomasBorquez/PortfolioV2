import { GoEye, GoEyeClosed } from 'react-icons/go';
import {AiFillGithub} from 'react-icons/ai'

type Props = {
  project: string;
  deployLink?: string;
  gitLink: string
  status: 'online' | 'offline' | 'maintenance' | 'already here';
  technologies: string;
  s: any;
  children: any;
};

const ProjectCard = ({ project, s, deployLink, technologies, gitLink, status, children }: Props) => {
  const dot = status === 'online' ? 'green' : status === 'offline' ? 'gray' : status === 'maintenance' ? 'yellow' : 'red'  
  return (
    <div className={s.wrapper}>
      <div className={s.projectsWrapper}>
        <div className={s.projectsBody}>
          <div className={s.projectBox}>
            <div className={s.hoverContainer}>
              <p>{technologies}</p>
              <div className={s.linksContainer}>
                {status === 'maintenance' || status === 'already here'  || status === 'offline' 
                ? <a target="_blank" rel="noreferrer" href={deployLink}><GoEyeClosed/></a> 
                : <a target="_blank" rel="noreferrer" href={deployLink}><GoEye/></a>}
                <a target="_blank" rel="noreferrer" href={gitLink}><AiFillGithub/></a>
              </div>
            </div>
            {children}
          </div>
          <div className={s.status}>{status}<div className={s.dot} style={{background: dot}}/></div>
          <div className={s.projectName}>
            <p>{project}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
