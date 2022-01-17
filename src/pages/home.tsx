import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useAspect, Text } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';

import { motion } from 'framer-motion';

import RotatingTorusKnot from '@components/three/RotatingTorusKnot';

import HomeBackground from '@components/three/HomeBackground';

export const state = {
  top: 0,
};

const backgroundScrollFactor = 0.8;
const backgroundScrollSpeed = 0.3;

const Title = () => {
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Box margin={0.05}>
        <Text color="white">
          big beans are good
          <meshStandardMaterial />
        </Text>
      </Box>
    </Box>
  );
};

const HomeCanvas = () => {
  const groupRef = useRef<THREE.Group>();
  const spotLight = useRef();

  const { gl, size } = useThree();

  const [vpWidth, vpHeight] = useAspect(size.width, size.height);

  const vec = new THREE.Vector3();

  // Handle component lifecycle
  useEffect(() => {
    return () => {
      gl.dispose();
    };
  }, [gl]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.lerp(vec.set(-state.top / 100, 0, 0), backgroundScrollSpeed);
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
          <Box width="100%" marginTop={0.3} marginBottom={0.1}>
            <Box>
              <Title />
            </Box>
          </Box>
        </Flex>
      </group>
    </Suspense>
  );
};

const Home = () => {
  const scrollHandler = () => {
    const top = document.body.getBoundingClientRect().top;
    state.top = -top * backgroundScrollFactor;
  };

  document.body.onscroll = scrollHandler;

  return (
    <>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <HomeCanvas />
      </Canvas>
      <Grid item container p={15} flexDirection={'column'} alignItems={'flex-start'}>
        <Grid item zIndex={99} pt={10} sx={{ width: '70vw' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <Typography variant="h1"> Welcome.</Typography>
          </motion.div>
        </Grid>
        <Grid item zIndex={99} pt={10} sx={{ width: '50vw' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
          >
            <Typography variant="h4">
              Here you'll find a series of interative mathematics and physics simulations.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item sx={{ width: '60vw' }} pt={'100vh'} pb={'25vh'} zIndex={99}>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
