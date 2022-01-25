import { useEffect } from 'react';

import { Typography } from '@mui/material';
import { cubicBezier } from 'popmotion';
import { motion, useTransform } from 'framer-motion';

import { useHomePageStore } from '@pages/home';

import '@pages/home/Projects.scss';

const Projects = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);

  const xRangeLeft = useTransform(scrollPosition, [0, 0.5], [-900, 0], {
    ease: [cubicBezier(0.9, 0.4, 0.3, 0.9)],
  });

  const opacityRange = useTransform(scrollPosition, [0, 0.5], [0, 1], {
    ease: [cubicBezier(0.9, 0.4, 0.3, 0.9)],
  });

  useEffect(() => {
    console.log('pages/landing/Projects.tsx ==> Component Mounted');

    return () => {
      console.log('pages/landing/Projects.tsx ==> Component Unmounted');
    };
  }, []);

  return (
    <div className="page-container row-container">
      <motion.div
        style={{
          x: xRangeLeft,
        }}
      >
        <div className="left-diagonal-container">
          <div className="left-content">
            <Typography variant="h4" className="left-text">
              Projects
            </Typography>
          </div>

          <div className="left-content">
            <Typography
              variant="body1"
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

      <motion.div
        style={{
          opacity: opacityRange,
        }}
      >
        <div className="right-diagonal-container">
          <div className="right-content shiny-button">
            <Typography
              variant="h5"
              className="right-text no-select"
              onClick={() => console.log('got clicked')}
            >
              Quantum Mechanics
            </Typography>
          </div>
          <div className="right-content shiny-button">
            <Typography variant="h5" className="right-text no-select">
              Relativity Theory
            </Typography>
          </div>
          <div className="right-content shiny-button">
            <Typography variant="h5" className="right-text no-select">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip e
            </Typography>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
