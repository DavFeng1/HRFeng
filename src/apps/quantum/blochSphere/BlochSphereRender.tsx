import * as THREE from 'three';

import { Suspense, useRef, useState } from 'react';

import { OrbitControls } from '@react-three/drei';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import { useStore } from '../../../pages/blochSphere';

import discTexture from '../../../assets/textures/disc.png';

THREE.Object3D.DefaultUp.set(0, 0, 1);

const BlochSphere = () => {
  const xRingRef = useRef<THREE.Object3D>(null);
  const yRingRef = useRef<THREE.Object3D>(null);
  const zRingRef = useRef<THREE.Object3D>(null);
  const lineRef = useRef<THREE.ArrowHelper>(null);

  const [phi, setPhi] = useState(0);
  const [theta, setTheta] = useState(0);

  useStore.subscribe(
    (state) => state.phi,
    (updatedPhi) => setPhi((updatedPhi * Math.PI) / 180),
  );
  useStore.subscribe(
    (state) => state.theta,
    (updatedTheta) => setTheta((updatedTheta * Math.PI) / 180),
  );

  // ================================== GRID ON SPHERE =====================================
  const sphereGeoemtry = new THREE.SphereGeometry(1, 32, 16);
  sphereGeoemtry.rotateX(Math.PI / 2);
  const edgesGeometry = new THREE.EdgesGeometry(sphereGeoemtry);
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x113b47,
    opacity: 0.5,
    transparent: true,
    linewidth: 1,
  });

  // ====================================== state plot ======================================
  const origin = new THREE.Vector3(0, 0, 0);
  const axisX = new THREE.Vector3(1, 0, 0);
  const axisY = new THREE.Vector3(0, 1, 0);
  const axisZ = new THREE.Vector3(0, 0, 1);

  const state = new THREE.Vector3(1, 0, 0);

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(state.toArray(), 3));

  const texture = useLoader(THREE.TextureLoader, discTexture);
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 0.15,
    alphaTest: 0.5,
    map: texture,
  });

  // ===================================== Animation =====================================

  useFrame(() => {
    if (lineRef.current && xRingRef.current && yRingRef.current && zRingRef.current) {
      // Update state point and vector
      pointsGeometry.attributes.position.setXYZ(
        0,
        Math.cos(phi) * Math.sin(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(theta),
      );
      lineRef.current.setDirection(
        new THREE.Vector3(
          Math.cos(phi) * Math.sin(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(theta),
        ),
      );

      xRingRef.current.scale.x = Math.sin(theta);
      xRingRef.current.scale.y = Math.sin(theta);
      xRingRef.current.position.z = Math.cos(theta);

      yRingRef.current.scale.x = Math.sqrt(1 - Math.sin(theta) ** 2 * Math.sin(phi) ** 2);
      yRingRef.current.scale.y = Math.sqrt(1 - Math.sin(theta) ** 2 * Math.sin(phi) ** 2);
      yRingRef.current.position.y = Math.sin(theta) * Math.sin(phi);

      zRingRef.current.scale.x = Math.sqrt(
        Math.cos(theta) ** 2 + Math.sin(theta) ** 2 * Math.sin(phi) ** 2,
      );
      zRingRef.current.scale.y = Math.sqrt(
        Math.cos(theta) ** 2 + Math.sin(theta) ** 2 * Math.sin(phi) ** 2,
      );
      zRingRef.current.position.x = Math.cos(phi) * Math.sin(theta);
    }
  });

  //        <ringGeometry args={[1, 1.02, 60, 0, 0]} />

  return (
    <>
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <OrbitControls minDistance={1.5} maxDistance={2.25} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 200, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />
      <mesh>
        <arrowHelper args={[axisX, origin, 1.5, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisY, origin, 1.5, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisZ, origin, 1.5, 0x0080ff, 0.1]} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshLambertMaterial color={0x522d70} opacity={0.1} transparent={true} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edgesGeometry} material={linesMaterial} />
      <mesh ref={xRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0x00ff00} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} ref={yRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0xff0000} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} ref={zRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0x9300ff} side={THREE.DoubleSide} />
      </mesh>
      <points geometry={pointsGeometry} material={pointsMaterial} />
      <mesh>
        <arrowHelper ref={lineRef} args={[state, origin, 1, 0x0080ff, 0]} />
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
