import { useEffect } from 'react';

import { Typography } from '@mui/material';
import { motion, useTransform, Variants } from 'framer-motion';

import { useHomePageStore } from '@pages/home';

import '@pages/home/Projects.scss';

const RightTransition: Variants = {
  offscreen: {
    x: 1100,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    x: 1100,
  },
};

// const LeftTransition: Variants = {
//   offscreen: {
//     x: -1000,
//   },
//   onscreen: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//     },
//   },
//   exit: {
//     x: -1000,
//   },
// };

const Projects = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);

  // const xRangeLeft = useTransform(scrollPosition, [0, 0.45], [-900, 0]);

  // const xRangeRight = useTransform(scrollPosition, [0, 0.45], [900, 0]);

  // const opacityRange = useTransform(scrollPosition, [0, 0.45], [0, 1], {
  //   ease: [cubicBezier(0.9, 0.4, 0.3, 0.9)],
  // });

  useEffect(() => {
    console.log('pages/landing/Projects.tsx ==> Component Mounted');

    return () => {
      console.log('pages/landing/Projects.tsx ==> Component Unmounted');
    };
  }, []);

  return (
    <div className="page-container row-container">
      <motion.div
      // initial="offscreen"
      // whileInView="onscreen"
      // exit="exit"
      // variants={LeftTransition}
      // style={{
      //   x: xRangeLeft,
      // }}
      >
        <div className="left-diagonal-container">
          <div className="left-content">
            <Typography variant="h3" className="left-text">
              Projects
            </Typography>
          </div>

          <div className="left-content">
            <Typography
              variant="h5"
              className="left-text"
              textAlign={'center'}
            >
              Elucidating big ideas in mathematics and physics through
              interactive animations
            </Typography>
          </div>
        </div>
      </motion.div>

      {/*  ===========================   MIDDLE POINT =================== */}

      <div className="right-diagonal-container">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          exit="exit"
          variants={RightTransition}
          className="right-content shiny-button"
        >
          <Typography
            variant="h5"
            className="right-text no-select"
            onClick={() => console.log('got clicked')}
          >
            Quantum Mechanics
          </Typography>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          exit="exit"
          variants={RightTransition}
          className="right-content shiny-button"
        >
          <Typography variant="h5" className="right-text no-select">
            Relativity Theory
          </Typography>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          exit="exit"
          variants={RightTransition}
          className="right-content shiny-button"
        >
          <Typography variant="h5" className="right-text no-select">
            Mathematics
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
