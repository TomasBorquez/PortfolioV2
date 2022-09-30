// React stuff
import { useEffect, useState, useRef, memo } from 'react';
import Link from 'next/link';
// Threejs stuff
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// Redux
import { useDispatch, useSelector } from '../../store/store';
import { getUserState, setLoading } from '../../store/slices/userSlice';
// Icons & Images
import { IoMdPause } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import s from './DogModel.module.sass';

const DogModel = () => {
  const mountRef = useRef<HTMLHeadingElement>(null);
  const pauseRef = useRef<HTMLHeadingElement>(null);
  const [infoShow, setInfoShow] = useState(false);

  const dispatch = useDispatch();
  const { loading } = useSelector(getUserState);

  useEffect(() => {
    let roll: boolean = true,
      pause: boolean = false;
    document.addEventListener('mousedown', (e) => handleMouse(e, true));
    document.addEventListener('mouseup', (e) => handleMouse(e, false));
    const handleMouse = (e: MouseEvent, mouseState: boolean) => {
      const target = e.target as Node;
      if (
        mountRef.current &&
        mouseState &&
        mountRef.current.contains(target ? target : null)
      )
        roll = false;
      else roll = true;
      if (
        pauseRef.current &&
        mouseState &&
        pauseRef.current.contains(target ? target : null)
      )
        pause = !pause;
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
      adder.traverse((n) => {
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

    manager.onLoad = function () {
      dispatch(setLoading(false))
    };

    // manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    //   console.log('spinner');
    // };

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
      if (roll && !pause) adder.rotation.y += 0.002;
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
    <div
      id={loading ? s.loading : s.done}
      className={s.container}
      ref={mountRef}
    >
      <Link href="/works">
        <div id={s.projectsDisplayer}>
          <a id={s.myProjects}>My Projects</a>
        </div>
      </Link>
      <div id={s.topRight}>
        <div className={s.sButton} ref={pauseRef}>
          <IoMdPause />
        </div>
        <div
          onMouseOver={() => setInfoShow(true)}
          onMouseOut={() => setInfoShow(false)}
        >
          <div className={s.sButton}>
            <AiOutlineInfoCircle />
          </div>
          <ProjectInfo visible={infoShow} />
        </div>
      </div>
    </div>
  );
};

export default memo(DogModel);
