// React stuff
import Image from 'next/image';
// Components
import DogModel from '../DogModel/DogModel';
// Redux
import { useDispatch, useSelector } from '../../store/store';
import { getUserState, setLoading } from '../../store/slices/userSlice';
// Icons & Images
import DoggoIcon from '../../assets/img/1648855219888.jpg';
import CloudDownload from '../../assets/img/icons8-download-from-cloud-50.svg';
import GitHubIcon from '../../assets/img/GitHub-Mark-120px-plus.svg';
import LinkedinIcon from '../../assets/img/icons8-linkedin.svg';
import s from './About.module.sass';
import AboutLoading from './AboutLoading';

function About() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getUserState);

  return (
    <div id={s.centerMe}>
      <div id={s.AboutBox}>
        {loading ? (
          <AboutLoading />
        ) : (
          <div className={s.info}>
            <div id={s.bioContainer}>
              <div id={s.iconContainer}>
                <div id={s.DoggoIcon}>
                  <Image
                    src={DoggoIcon}
                    id="jsxStyle"
                    alt="doggo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div id={s.onlineContainer}>
                  <div id={s.dot} />
                  <div id={s.loong}>
                    <div id={s.statusContainer}>
                      <p>
                        {`Currently perfecting my skills on `}{' '}
                        <a
                          className={s.typeScript}
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.typescriptlang.org/"
                        >{` TypeScript `}</a>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id={s.TittleText}>
                <p>
                  Tomas Alfonso Borquez<span className={s.red}>.</span>
                </p>
              </div>
              <div id={s.Position}>
                <p>Full stack Developer</p>
              </div>
              <div id={s.Bio}>
                <div id={s.BioTittle}>Bio</div>
                <div id={s.BioText}>
                  <p>{`Hi, my name is Tomas, I'm from Argentina and I'm a Full Stack Web Developer altough I specialize in Front-end for the most part, I'm currently studying software web develpoment at a bootcamp called Henry.`}</p>
                  <p>{`I love developing innovative and creative projects, always looking for a new challenges and new stuff to learn since I'm in love with what I do, and I do feel excited and passionate about all the techologies available to learn and soon to be released, that's why I'm constantly expanding my knowledge and looking on all sorts of ways on how to improve.`}</p>
                </div>
              </div>
              <div id={s.WebCertificate}>
                Certificate in{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://certificates.soyhenry.com/cert?id=d54aa271-be93-494d-bb84-558fa02a2464"
                  id={s.WebDevelopment}
                >
                  Web development
                </a>
              </div>
              <div id={s.buttonsContainer}>
                {/* CV Button */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1zXJTDN8RG6I5d-h_CA0wx8dllEniKqx1/view?usp=sharing"
                  id={s.ButtonCV}
                >
                  Download CV
                  <div id={s.svgCV}>
                    <Image
                      className={s.icon}
                      width="23px"
                      height="23px"
                      src={CloudDownload}
                      alt="cloud icon"
                    />
                  </div>
                </a>
              </div>

              {/* GitHub Button */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TomasBorquez"
                id={s.ButtonG}
              >
                <Image
                  id={s.svgG}
                  width="23px"
                  height="23px"
                  src={GitHubIcon}
                  alt="github icon"
                />
              </a>

              {/* Linkedin Button */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tomasborquez/"
                id={s.ButtonL}
              >
                <Image
                  id={s.svgL}
                  width="23px"
                  height="23px"
                  src={LinkedinIcon}
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
        )}

        {loading && (
          <div className={s.loaderContainer}>
            <span className={s.loader} />
          </div>
        )}
        <DogModel />
      </div>
    </div>
  );
}

export default About;
