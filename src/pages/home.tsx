import * as THREE from 'three';

import { Suspense, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useAspect, Text } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';
import { motion } from 'framer-motion';

import HomeBackground from '../components/three/HomeBackground';
import RotatingTorusKnot from '../components/three/RotatingTorusKnot';

export const state = {
  top: 0,
};

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

  const { size } = useThree();

  const [vpWidth, vpHeight] = useAspect(size.width, size.height);

  const vec = new THREE.Vector3();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.lerp(vec.set(-state.top / 100, 0, 0), 0.1);
    }
  });

  return (
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
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          flexWrap="wrap"
          width="100%"
          marginTop={0.3}
          marginBottom={0.1}
        >
          <Box>
            <Title />
          </Box>
        </Box>
      </Flex>
    </group>
  );
};

const Home = () => {
  const scrollHandler = () => {
    const top = document.body.getBoundingClientRect().top;

    state.top = -top;
  };

  document.body.onscroll = scrollHandler;

  return (
    <>
      <Canvas style={{ position: 'fixed', top: 0, left: 0 }}>
        <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 200, 0]} />
        <pointLight position={[100, 200, 100]} />
        <pointLight position={[-100, -200, -100]} />
        <spotLight
          position={[1, 1, 1]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <HomeCanvas />
        </Suspense>
      </Canvas>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duraction: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={{
          zIndex: 999,
        }}
      >
        <Grid
          item
          container
          sx={{
            width: '100vw',
            position: 'absoulte',
          }}
          p={10}
        >
          <Typography variant="h1"> Welcome to my website </Typography>
          <Grid item sx={{ width: '50vw' }} pt={10}>
            <Typography variant="h4">
              Here you'll find a series of interative mathematics and physics simulations.
            </Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
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
      </motion.div>
    </>
  );
};

export default Home;
