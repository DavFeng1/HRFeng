import * as THREE from 'three';

import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const StateController = () => {
  const state = useThree();

  useEffect(() => {
    state.gl.setPixelRatio(window.devicePixelRatio);
    state.gl.setSize(650, 650);
  });

  return <></>;
};

const sceneCanvas = () => {
  const texture = new THREE.TextureLoader().load('/textures/disc.png');
  const BLOCH_SPHERE_RADIUS = 5;

  return (
    <Canvas
      onCreated={(state) => state.gl.setClearColor(0xffffff, 0)}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [-10, 45, 20] }}
    >
      <StateController />
      <perspectiveCamera args={[75, 650 / 400, 0.1, 50]} />
      <OrbitControls minDistance={5} maxDistance={15} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 200, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />
      <axesHelper args={[10]} />
      <mesh>
        <bufferGeometry />
        <pointsMaterial color={0x0080ff} size={0.5} alphaTest={0.5} map={texture} />
      </mesh>
      <mesh>
        <sphereGeometry args={[BLOCH_SPHERE_RADIUS, 32, 16]} />
        <meshLambertMaterial color={0x156289} opacity={0.5} transparent={true} />
      </mesh>
      <lineSegments>
        <sphereGeometry args={[BLOCH_SPHERE_RADIUS, 32, 16]} />
        <lineBasicMaterial color={0xffffff} transparent={true} opacity={0.5} />
      </lineSegments>
    </Canvas>
  );
};

export default sceneCanvas;
