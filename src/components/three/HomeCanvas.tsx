import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useAspect, useProgress } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';
import useHomePageStore, {
  useHomePageControls,
} from '@pages/home/HomeStore';

import RotatingTorusKnot from '@components/three/RotatingTorusKnot';
import HomeBackground from '@components/three/HomeBackground';

const HomeCanvas = () => {
  const scrollGroupRef = useRef<THREE.Group>(null);
  const spotLight = useRef(null);
  const { gl, size } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  const progress = useProgress();
  const { scrollPosition } = useHomePageControls();

  useEffect(() => {
    useHomePageStore.setState({ loadingProgress: progress.progress });
  }, [progress]);

  useEffect(() => {
    console.log('HomeCanvas.tsx ==> Component mounted');

    gl.setClearAlpha(0);

    return () => {
      console.log('HomeCanvas.tsx ==> Component unmounted ==> gl.dispose');
      gl.dispose();
    };
  }, [gl]);

  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (scrollGroupRef.current) {
      scrollGroupRef.current.position.lerp(
        vec.set(0, 20 * scrollPosition.get(), 0),
        0.3,
      );
    }
  });

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2.5, 0]} />
      <spotLight
        ref={spotLight}
        position={[0, 0, 10]}
        penumbra={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <HomeBackground />

      <group ref={scrollGroupRef}>
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
