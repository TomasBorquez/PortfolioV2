// React stuff
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Three stuff
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Icons & Images
import DoggoIcon from '../../assets/img/1648855219888.jpg';
import CloudDownload from '../../assets/img/icons8-download-from-cloud-50.svg';
import GitHubIcon from '../../assets/img/GitHub-Mark-120px-plus.svg';
import LinkedinIcon from '../../assets/img/icons8-linkedin.svg';
import s from './About.module.sass';

function About() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount: any = mountRef.current;
    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      4,
      currentMount.clientWidth / currentMount.clientHeight,
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
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Shadows
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    // move camera ^^

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
          //@ts-ignore
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

    // Scene render
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      spotLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10
      );
      adder.rotation.y += 0.002;
      requestAnimationFrame(animate);
    };
    animate();

    // Scene cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div id={s.centerMe}>
      <div id={s.AboutBox}>
        {/* Info about me part */}
        <div className={s.info}>
          <div id={s.TittleText}>
            Tomas Alfonso Borquez<span className={s.red}>.</span>
          </div>
          <div id={s.DoggoIcon}>
            <Image
              src={DoggoIcon}
              id="jsxStyle"
              alt="doggo"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div id={s.Position}>Full stack Developer</div>
          <div id={s.Bio}>
            <div id={s.BioTittle}>
              Bio<span className={s.red}>.</span>
            </div>
            <div id={s.BioText}>
              {`Hi, my name is Tomas, I'm from argentina and I'm an aspiring software Developer looking for my first working experience on the software develpoment industry, I'm currently studying software web develpoment at a bootcamp called Henry.`}
              <br></br>
              {`I love developing innovative and creative projects, always looking for a new challenges and new stuff to learn since I'm in love with what I do, and I do feel excited and passionate about all the techologies available to learn and soon to be released, that's why I'm constantly expanding my knowledge and looking on all sorts of ways on how to improve. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>
          <div id={s.WebCertificate}>
            Certificate in{' '}
            <a id={s.WebDevelopment} href="https://github.com/TomasBorquez">
              Web development
            </a>
          </div>
          {/* CV Button */}
          <a href="https://github.com/TomasBorquez" id={s.ButtonCV}>
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

          {/* GitHub Button */}
          <a href="https://github.com/TomasBorquez" id={s.ButtonG}>
            <Image
              id={s.svgG}
              width="23px"
              height="23px"
              src={GitHubIcon}
              alt="github icon"
            />
          </a>

          {/* Linkedin Button */}
          <a href="https://www.linkedin.com/in/tomasborquez/" id={s.ButtonL}>
            <Image
              id={s.svgL}
              width="23px"
              height="23px"
              src={LinkedinIcon}
              alt="linkedin icon"
            />
          </a>
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
