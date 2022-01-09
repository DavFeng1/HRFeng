import * as THREE from 'three';

import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';

const SceneCanvas = () => {
  const texture = new THREE.TextureLoader().load('/textures/disc.png');
  const BLOCH_SPHERE_RADIUS = 5;

  return (
    <Canvas
      onCreated={(state) => state.gl.setClearColor(0xffffff, 0)}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [15, 10, 15] }}
      style={{ height: '100%', width: '100%' }}
    >
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <OrbitControls minDistance={10} maxDistance={12} />
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
