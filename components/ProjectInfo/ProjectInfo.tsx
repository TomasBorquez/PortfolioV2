import React from 'react';
import s from './ProjectInfo.module.sass';

type Props = {
  visible: boolean;
};

const ProjectInfo = ({ visible }: Props) => {
  return (
    <div id={s.container} style={{display: visible ? 'flex' : 'none'}}>
      <div id={s.infoContainer}>
        <div id={s.infoTitle}>
          <p>What technologies were used?</p>
        </div>
        <div id={s.infoDescription}>
          <p>
            The dog model was made with{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.blender.org/"
              className={s.voxel3D}
            >
              Voxel3D
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.blender.org/"
              className={s.blender}
            >
              Blender
            </a>
            , and it is displayed on the website with{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://threejs.org/"
              className={s.threeJS}
            >
              Threejs
            </a>{' '}
            and rendered with <span className={s.red}>WebGL</span>.<br></br>
            <p>
              Meanwhile the Frontend aka website was made with{' '}
              <a
                className={s.next}
                target="_blank"
                rel="noreferrer"
                href="https://nextjs.org/"
              >
                NextJS
              </a>
              ,{' '}
              <a
                className={s.typeScript}
                target="_blank"
                rel="noreferrer"
                href="https://www.typescriptlang.org/"
              >
                TypeScript
              </a>{' '}
              and{' '}
              <a
                className={s.sass}
                target="_blank"
                rel="noreferrer"
                href="https://sass-lang.com/"
              >
                SASS
              </a>
              .
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
