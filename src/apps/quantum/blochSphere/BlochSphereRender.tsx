import * as THREE from 'three';
import { Suspense, useRef } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import discTexture from './disc.png';
import { Object3D } from 'three';

const BLOCH_SPHERE_RADIUS = 1;
const RING_WIDTH = 0.01;

interface BlochSphereProps {
  hi?: string;
}

const BlochSphere = (props: BlochSphereProps) => {
  const xRingRef = useRef<Object3D>(null);
  const yRingRef = useRef<Object3D>(null);

  let time = 0;

  useFrame((clock) => {
    time += Math.PI / 32;
    if (xRingRef.current && yRingRef.current) {
      xRingRef.current.rotation.x += 0.01;
      yRingRef.current.rotation.y += 0.01;

      xRingRef.current.position.y += 0.04 * Math.sin(time);
    }
  });

  // =================== GRID ON SPHERE ====================================================
  const sphereGeoemtry = new THREE.SphereGeometry();
  const edgesGeometry = new THREE.EdgesGeometry(sphereGeoemtry);
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x113b47,
    opacity: 0.5,
    transparent: true,
    linewidth: 1,
  });

  // ============================================= state plot ===============================
  //normalize the direction vector (convert to vector of length 1)
  const origin = new THREE.Vector3(0, 0, 0);
  const axisX = new THREE.Vector3(1, 0, 0);
  const axisY = new THREE.Vector3(0, 1, 0);
  const axisZ = new THREE.Vector3(0, 0, 1);
  const state = new THREE.Vector3(1, 1, 1);
  state.normalize();

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(state.toArray(), 3));
  const texture = useLoader(THREE.TextureLoader, discTexture);
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 0.15,
    alphaTest: 0.5,
    map: texture,
  });

  return (
    <>
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <OrbitControls minDistance={1.5} maxDistance={2.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 200, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />
      <mesh>
        <arrowHelper args={[axisX, origin, 1.5, 0x0080ff, 0.05]} />
        <arrowHelper args={[axisY, origin, 1.5, 0x0080ff, 0.05]} />
        <arrowHelper args={[axisZ, origin, 1.5, 0x0080ff, 0.05]} />
      </mesh>
      <mesh>
        <sphereGeometry args={[BLOCH_SPHERE_RADIUS, 32, 16]} />
        <meshLambertMaterial color={0x522d70} opacity={0.1} transparent={true} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edgesGeometry} material={linesMaterial} />
      <points geometry={pointsGeometry} material={pointsMaterial} />
      <mesh ref={xRingRef}>
        <ringGeometry args={[1, 1.01, 60, 0, 0]} />
        <meshBasicMaterial color={0x89cff0} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={yRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1, 1.01, 30, 0, 90]} />
        <meshBasicMaterial color={0xff0000} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <arrowHelper args={[state, origin, 1, 0x0080ff, 0]} />
      </mesh>
    </>
  );
};

const Fallback = () => {
  return <mesh></mesh>;
};

const Main = () => {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [15, 10, 15] }}
      style={{ height: '100%', width: '100%' }}
    >
      <Suspense fallback={<Fallback />}>
        <BlochSphere />
      </Suspense>
    </Canvas>
  );
};

export default Main;
