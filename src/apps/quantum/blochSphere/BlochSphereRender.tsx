import * as THREE from 'three';

import create from 'zustand';

import { Suspense, useRef, useEffect } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import { useStore, api } from '../../../pages/blochSphere';

import discTexture from './disc.png';

interface BlochSphereProps {
  phi: number;
  theta: number;
}

const BlochSphere = (props: BlochSphereProps) => {
  const xRingRef = useRef<THREE.Object3D>(null);
  const yRingRef = useRef<THREE.Object3D>(null);

  const stateRef = useRef<THREE.Object3D>(null);
  const pointRef = useRef<THREE.Object3D>(null);

  const clock = new THREE.Clock();

  useEffect(() => {});

  useFrame(() => {
    const time = clock.getElapsedTime();
    if (xRingRef.current && yRingRef.current && stateRef.current && pointRef.current) {
      yRingRef.current.rotation.y += 0.01;

      xRingRef.current.scale.x = Math.sin(time);
      xRingRef.current.scale.y = Math.sin(time);
      xRingRef.current.scale.z = Math.sin(time);

      // xRingRef.current.position.z = Math.sin(time);

      // stateRef.current.rotation.y += 0.01;
      // pointRef.current.rotation.y += 0.01;

      // stateRef.current.rotation.x += 0.01;
      // pointRef.current.rotation.x += 0.01;

      // console.log('Elapsed time: ', time);
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
  const state = new THREE.Vector3(
    Math.cos(props.phi) * Math.sin(props.theta),
    Math.sin(props.phi) * Math.sin(props.theta),
    Math.cos(props.theta),
  );

  console.log(state);

  // state.normalize();

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
        <sphereGeometry args={[1, 32, 16]} />
        <meshLambertMaterial color={0x522d70} opacity={0.1} transparent={true} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edgesGeometry} material={linesMaterial} />
      <mesh ref={xRingRef}>
        <ringGeometry args={[1, 1.01, 60, 0, 0]} />
        <meshBasicMaterial color={0x89cff0} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={yRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1, 1.01, 30, 0, 90]} />
        <meshBasicMaterial color={0xff0000} side={THREE.DoubleSide} />
      </mesh>
      <points ref={pointRef} geometry={pointsGeometry} material={pointsMaterial} />
      <mesh ref={stateRef}>
        <arrowHelper args={[state, origin, 1, 0x0080ff, 0]} />
      </mesh>
    </>
  );
};

const Fallback = () => {
  return <mesh></mesh>;
};

const Main = (props: BlochSphereProps) => {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [15, 10, 15] }}
      style={{ height: '100%', width: '100%' }}
    >
      <Suspense fallback={<Fallback />}>
        <BlochSphere phi={props.phi} theta={props.theta} />
      </Suspense>
    </Canvas>
  );
};

export default Main;
