import * as THREE from 'three';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Props {
  canvasWidth: number;
}
const StateController = ({ canvasWidth }: Props) => {
  const state = useThree();

  // Run once on mount
  useEffect(() => {
    state.gl.setPixelRatio(window.devicePixelRatio);
    state.gl.setSize(canvasWidth, (canvasWidth * window.innerHeight) / window.innerWidth);
  }, [state.gl, canvasWidth]);

  return null;
};

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 5;
    controls.maxDistance = 15;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const SceneCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);

  const texture = new THREE.TextureLoader().load('/textures/disc.png');
  const BLOCH_SPHERE_RADIUS = 5;

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasWidth(canvasRef.current.clientWidth);
    }
  }, []);

  return (
    <Canvas
      onCreated={(state) => state.gl.setClearColor(0xffffff, 0)}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [15, 10, 15] }}
      ref={canvasRef}
    >
      <CameraController />
      <StateController canvasWidth={canvasWidth} />
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
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

export default SceneCanvas;
