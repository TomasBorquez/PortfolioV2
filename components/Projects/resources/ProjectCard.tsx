import { GoEye, GoEyeClosed } from 'react-icons/go';
import {AiFillGithub} from 'react-icons/ai'

type Props = {
  project: string;
  deployLink?: string;
  gitLink: string
  status: 'Online' | 'Offline' | 'Maintenance' | 'Already here';
  technologies: string;
  s: any;
  children: any;
};

const ProjectCard = ({ project, s, deployLink, technologies, gitLink, status, children }: Props) => {
  const dot = status === 'Online' ? '#84d169' : status === 'Offline' ? 'gray' : status === 'Maintenance' ? 'yellow' : '#484848'  
  return (
    <div className={s.wrapper}>
      <div className={s.projectsWrapper}>
        <div className={s.projectsBody}>
          <div className={s.projectBox}>
            <div className={s.hoverContainer}>
              <p>{technologies}</p>
              <div className={s.linksContainer}>
                {status === 'Maintenance' || status === 'Already here'  || status === 'Offline' 
                ? <a className={s.disabled}><GoEyeClosed/></a> 
                : <a target="_blank" rel="noreferrer" href={deployLink}><GoEye/></a>}
                <a target="_blank" rel="noreferrer" href={gitLink}><AiFillGithub/></a>
              </div>
            </div>
            {children}
          </div>
          <div className={s.statusContainer}>
            <div className={s.status}><div className={s.dot} style={{background: dot}}/><div className={s.statusText}>{status}</div></div>
          </div>
          <div className={s.projectName}>
            <p>{project}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
