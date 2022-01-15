import * as THREE from 'three';

import { useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Plane, TorusKnot } from '@react-three/drei';

const BackGrid = () => {
  const { scene } = useThree();

  useEffect(() => {
    const fog = new THREE.FogExp2(0x121212, 0.05);
    scene.fog = fog;
  }, [scene]);

  return (
    <Plane
      position={[4, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      args={[80, 80, 128, 128]}
      scale={[2.5, 2.5, 2.5]}
    >
      <meshStandardMaterial color="#ea5455" wireframe side={THREE.DoubleSide} />
    </Plane>
  );
};

const RotatingTorusKnot = () => {
  const ref = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <TorusKnot ref={ref} position={[0, 2.5, 0]} scale={[0.5, 0.5, 0.5]} args={[1, 0.4, 128, 32]}>
      <meshStandardMaterial />
    </TorusKnot>
  );
};

const HomeBackground = () => {
  return (
    <>
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 200, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />

      <RotatingTorusKnot />

      <BackGrid />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Canvas style={{ position: 'fixed', top: 0, left: 0 }}>
        <HomeBackground />
        {/* <EffectComposer>
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.3} height={1024} />
        </EffectComposer> */}
      </Canvas>
      <Grid
        item
        container
        sx={{
          width: '100vw',
          zIndex: 99,
          position: 'absoulte',
        }}
        p={10}
      >
        <Typography variant="h1"> Welcome to my website. </Typography>
        <Grid item sx={{ width: '50vw', zIndex: 99 }} pt={10}>
          <Typography variant="h4">
            Here you'll find a series of interative mathematics and physics simulations. Built to be
            engaging for educational purposes
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
