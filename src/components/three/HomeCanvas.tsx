import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';

import { useThree, useFrame } from '@react-three/fiber';
import {
  useAspect,
  useProgress,
  // useScroll,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';

import RotatingTorusKnot from '@components/three/RotatingTorusKnot';
import HomeBackground from '@components/three/HomeBackground';

import { useHomePageStore } from '@pages/home';
import { MotionValue } from 'framer-motion';

const HomeCanvas = () => {
  // TODO: investigate why this ref is lost when switching pages
  const scrollPositionRef = useRef<MotionValue<number>>();

  // const scrollPosition = useScroll();
  const groupRef = useRef<THREE.Group>();
  const spotLight = useRef();
  const { gl, size } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  const progress = useProgress();

  useEffect(() => {
    useHomePageStore.setState({ loadingProgress: progress.progress });
  }, [progress]);

  useEffect(() => {
    console.log('HomeCanvas.tsx ==> Component mounted');

    useHomePageStore.subscribe(
      (state) => (scrollPositionRef.current = state.scrollPosition),
    );

    return () => {
      console.log('HomeCanvas.tsx ==> Component unmounted ==> gl.dispose');
      gl.dispose();
    };
  }, [gl]);

  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (groupRef.current && scrollPositionRef.current) {
      groupRef.current.position.lerp(
        vec.set(0, 20 * scrollPositionRef.current.get(), 0),
        0.3,
      );
    }
  });

  return (
    <Suspense fallback={null}>
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

      <ScrollControls damping={4} pages={3}>
        <Scroll>
          <group ref={groupRef}>
            <Flex
              flexDirection="column"
              size={[vpWidth, vpHeight, 0]}
              position={[-vpWidth / 2, vpHeight / 2, 0]}
            >
              <HomeBackground />
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
        </Scroll>
      </ScrollControls>
    </Suspense>
  );
};

export default HomeCanvas;
