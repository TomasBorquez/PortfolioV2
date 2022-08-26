// React stuff
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Three stuff
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// Icons & Images
import DoggoIcon from '../../assets/img/1648855219888.jpg';
import CloudDownload from '../../assets/img/icons8-download-from-cloud-50.svg';
import GitHubIcon from '../../assets/img/GitHub-Mark-120px-plus.svg';
import LinkedinIcon from '../../assets/img/icons8-linkedin.svg';
import Online from '../../assets/img/2423669-8bc34a.svg';
import s from './About.module.sass';

function About() {
  const mountRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let roll: boolean = true;
    document.addEventListener('mousedown', e => handleMouse(e, true));
    document.addEventListener('mouseup', e => handleMouse(e, false));
    const handleMouse = (e: MouseEvent, mouseState: boolean) => {
      const target = e.target as Node;
      if (
        mountRef.current &&
        mouseState &&
        mountRef.current.contains(target ? target : null)
      )
        roll = false;
      else roll = true;
    };
    const currentMount = mountRef.current;
    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      4,
      currentMount
        ? currentMount.clientWidth / currentMount.clientHeight
        : undefined,
      0.5,
      1000
    );
    camera.position.set(60, 20, 20);
    scene.add(camera);
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      currentMount ? currentMount?.clientWidth : 0,
      currentMount ? currentMount.clientHeight : 0
    );
    currentMount ? currentMount.appendChild(renderer.domElement) : undefined;

    // Shadows
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    // Controls to move your camera
    controls.enableDamping = true;

    // Our model
    const model = new URL(
      '../../assets/models/puppermodel.glb',
      import.meta.url
    );
    const adder = new THREE.Group();
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model.href, (gltb: { scene: any }) => {
      adder.add(gltb.scene);
      adder.traverse(n => {
        if ((n as THREE.Mesh).isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          // @ts-ignore
          if ((n as THREE.Mesh).material.map)
            //@ts-ignore
            (n as THREE.Mesh).material.map.anisotropy = 16;
        }
      });
      adder.position.y = -1;
      scene.add(adder);
    });

    // DirectionalLight (all of the above with angle)
    const directionalLight = new THREE.HemisphereLight(0xd8cb9c, 0x080820, 0.6);
    // directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffa95c, 4);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.001;
    spotLight.shadow.mapSize.width = 1024 * 4;
    spotLight.shadow.mapSize.height = 1024 * 4;
    scene.add(spotLight);

    // Loading
    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log(
        'Started loading file: ' +
          url +
          '.\nLoaded ' +
          itemsLoaded +
          ' of ' +
          itemsTotal +
          ' files.'
      );
    };

    manager.onLoad = function () {
      console.log('Loading complete!');
    };

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      console.log(
        'Loading file: ' +
          url +
          '.\nLoaded ' +
          itemsLoaded +
          ' of ' +
          itemsTotal +
          ' files.'
      );
    };

    manager.onError = function (url) {
      console.log('There was an error loading ' + url);
    };
    const loader = new OBJLoader(manager);
    loader.load('../../assets/models/puppermodel.glb', () => {});

    // Scene render
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      spotLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10
      );
      if (roll) adder.rotation.y += 0.002;
      // else if (!roll) adder.rotation.x += 100;
      requestAnimationFrame(animate);
    };
    animate();

    // Scene cleanup
    return () => {
      currentMount ? currentMount.removeChild(renderer.domElement) : undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={s.centerMe}>
      <div id={s.AboutBox}>
        {/* Info about me part */}
        <div className={s.info}>
          <div id={s.bioContainer}>
            <div id={s.DoggoIcon}>
              <Image
                src={DoggoIcon}
                id="jsxStyle"
                alt="doggo"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div id={s.TittleText}>
              Tomas Alfonso Borquez<span className={s.red}>.</span>
            </div>
            <div id={s.Position}>Full stack Developer</div>
            <div id={s.Bio}>
              <div id={s.BioTittle}>Bio</div>
              <div id={s.currently}>
                <p>
                  <div>
                    <Image
                      src={Online}
                      alt=""
                      width="10px"
                      height="10px"
                    />
                  </div>
                  {`Currently I'm perfecting my skills on `}{' '}
                  <a className={s.typeScript} href="">{` TypeScript `}</a>{' '}
                  {`a personal project.`}
                </p>
              </div>
              <div id={s.BioText}>
                <p>{`Hi, my name is Tomas, I'm from argentina and I'm an aspiring software Developer looking for my first working experience on the software develpoment industry, I'm currently studying software web develpoment at a bootcamp called Henry.`}</p>
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
        {/* Canvas */}
        <div className={s.container} ref={mountRef}>
          <Link href="/works">
            <div id={s.projectsDisplayer}>
              <a id={s.myProjects}>My Projects</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
