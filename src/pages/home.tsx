import * as THREE from 'three';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Grid, Typography, Paper, Slider } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { cubicBezier } from 'popmotion';
import {
  AnimatePresence,
  motion,
  motionValue,
  Variants,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

import HomeCanvas from '@components/three/Home';

export const state = {
  top: 0,
};

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

const slideFromLeft: Variants = {
  offscreen: {
    x: -400,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    //rotate: 10,
    transition: {
      type: 'easeIn',
      duration: 0.4,
    },
  },
};

const slideFromRight: Variants = {
  offscreen: {
    x: 400,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    //rotate: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    },
  },
};

const Home = () => {
  const scrollHandler = (ev: Event) => {
    const top = document.body.getBoundingClientRect().top;
    state.top = -top;
  };

  document.body.onscroll = scrollHandler;

  const [isComplete, setIsComplete] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const xRangeLeft = useTransform(scrollYProgress, [0, 0.5], [-900, 0], {
    ease: [cubicBezier(0.9, 0.4, 0.3, 0.9)],
  });
  const xRangeRight = useTransform(scrollYProgress, [0, 0.5], [900, 0], {
    ease: [cubicBezier(0.9, 0.4, 0.3, 0.9)],
  });

  return (
    <>
      {/* ========================THREE JS CANVAS BACKGROUND ===================*/}

      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -999 }}>
        <HomeCanvas state={state} />
      </Canvas>

      {/* ============================ FOREGROUND =============================*/}

      {/* ============================ PAGE 1 =============================*/}

      <Grid
        item
        container
        p={15}
        direction={'row'}
        alignItems={'stretch'}
        justifyContent={'center'}
        sx={{ minHeight: '100vh' }}
        className="page-container"
      >
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <Typography variant="h1" zIndex={99}>
              Welcome.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                ease: [0.1, 0.74, 0.47, 0.97],
                duration: 1.5,
              },
            }}
          >
            <Typography variant="h4" width={'40ch'}>
              This is my personal website
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* ============================ PAGE 2 =============================*/}
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          alignContent: 'stretch',
          justifyContent: 'center',
          minHeight: '100vh',
          minWidth: '100vw',
        }}
        className="page-container"
      >
        <motion.div
          style={{
            x: xRangeLeft,
          }}
        >
          <div className="left-diagonal-container">
            <div className="left-content">
              <Typography variant="h4" maxWidth={'45ch'} className="left-text">
                The Coeus Project
              </Typography>
            </div>

            <div className="left-content">
              <Typography variant="body1" maxWidth={'45ch'} className="left-text">
                The project is an attempt at elucidating big ideas in matheatics and physics through
                interactive animations
              </Typography>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            x: xRangeRight,
          }}
        >
          <div className="right-diagonal-container">
            <div className="right-content">
              <Typography variant="h5" maxWidth={'45ch'} className="right-text">
                Quantum Mechanics
              </Typography>
            </div>
            <div className="right-content">
              <Typography variant="h5" maxWidth={'45ch'} className="right-text">
                Special and General Relativity
              </Typography>
            </div>
            <div className="right-content">
              <Typography variant="h5" maxWidth={'45ch'} className="right-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============================ PAGE 3 =============================*/}

      <Grid
        item
        container
        display={'flex'}
        direction={'column'}
        alignItems={'stretch'}
        justifyContent={'center'}
        p={15}
        sx={{ backgroundColor: 'purple', width: 1, minHeight: '100vh' }}
        className="page-container"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
        >
          <motion.div variants={slideFromLeft} style={{ backgroundColor: 'blue' }}>
            <Typography variant="h4" width={'45ch'}>
              conatct me contact me contact me contact me
            </Typography>
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
};

export default Home;
