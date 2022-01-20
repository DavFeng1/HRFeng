import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';
import { Grid, Typography, Paper, Slider } from '@mui/material';
import { Canvas } from '@react-three/fiber';

import { AnimatePresence, motion, motionValue, Variants, useViewportScroll } from 'framer-motion';

import HomeCanvas from '@components/three/Home';

export const state = {
  top: 0,
};

// window.addEventListener('scroll', console.log, false);

const contentOffsetY = motionValue(0);

const landingAnimation: Variants = {
  offscreen: {
    opacity: 0,
    scale: 1.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
  },
};

const projectsAnimation: Variants = {
  offscreen: {
    x: -900,
    opacity: 0,
  },
  onscreen: {
    x: 50,
    opacity: 1,
    //rotate: 10,
    transition: {
      type: 'tween',
      // bounce: 0.4,
      duration: 0.5,
    },
  },
};

const Home = () => {
  const scrollHandler = (ev: Event) => {
    const top = document.body.getBoundingClientRect().top;
    state.top = -top;
  };

  document.body.onscroll = scrollHandler;

  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      {/* ========================THREE JS CANVAS BACKGROUND ===================*/}

      {/* <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -999 }}>
        <HomeCanvas state={state} />
      </Canvas> */}

      {/* ============================ FOREGROUND =============================*/}

      {/* ============================ PAGE 1 =============================*/}
      {/* <CircleIndicator /> */}

      <Grid
        item
        container
        p={15}
        direction={'column'}
        alignItems={'stretch'}
        justifyContent={'center'}
      >
        <Grid item p={5}>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duraction: 0.2,
              },
            }}
          >
            <Typography variant="h1" zIndex={99}>
              Welcome.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item p={5}>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
              },
            }}
          >
            <Typography variant="h4" width={'45ch'}>
              Here you'll find a series of interative mathematics and physics simulations.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* ============================ PAGE 2 =============================*/}

      <Grid item pl={5} pt={'25vh'} pb={'25vh'}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
        >
          <motion.div variants={projectsAnimation}>
            <Typography variant="h4" width={'45ch'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </motion.div>
        </motion.div>
      </Grid>

      {/* ============================ PAGE 3 =============================*/}

      <Grid
        item
        pl={5}
        pt={'25vh'}
        pb={'25vh'}
        sx={{ backgroundColor: 'green', background: 'green' }}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
        >
          <motion.div variants={projectsAnimation}>
            <Typography variant="h4" width={'45ch'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
};

export default Home;
