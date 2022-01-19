import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';

import { useThree, useFrame } from '@react-three/fiber';
import { useAspect } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';

import RotatingTorusKnot from '@components/three/RotatingTorusKnot';
import HomeBackground from '@components/three/HomeBackground';

const HomeCanvas = ({ state }: any) => {
  const groupRef = useRef<THREE.Group>();
  const spotLight = useRef();

  const { gl, size } = useThree();

  const [vpWidth, vpHeight] = useAspect(size.width, size.height);

  const vec = new THREE.Vector3();

  // Handle component lifecycle
  useEffect(() => {
    console.log('Home.tsx useEffect[gl] mounted');
    return () => {
      console.log('Home.tsx useEffect[gl] gl.dispose');
      gl.dispose();
    };
  }, [gl]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.lerp(vec.set(-state.top / 100, 0, 0), 0.3);
    }
  });

  return (
    <Suspense fallback={null}>
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2.5, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />
      <spotLight
        ref={spotLight}
        position={[-2.5, 7, 0]}
        penumbra={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <group ref={groupRef}>
        <HomeBackground />
        <Flex
          flexDirection="column"
          size={[vpWidth, vpHeight, 0]}
          position={[-vpWidth / 2, vpHeight / 2, 0]}
        >
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
          >
            <Box margin={0.05}>
              <RotatingTorusKnot />
            </Box>
          </Box>
        </Flex>
      </group>
    </Suspense>
  );
};

export default HomeCanvas;
