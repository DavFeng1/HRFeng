import { Typography } from '@mui/material';
import { motion, useTransform, Variants } from 'framer-motion';
import { cubicBezier } from 'popmotion';
import { useHomePageStore } from '@pages/home/HomeStore';

import '@pages/home/Landing.scss';

const marqueeVariant: Variants = {
  animate: {
    x: [0, -1400],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
};

const Landing = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);

  const opacityRange = useTransform(scrollPosition, [0, 0.3], [1, 0], {
    ease: [cubicBezier(0.9, 0.7, 0.5, 0.3)],
  });

  return (
    <div className="page-container landing-page-container">
      <motion.div
        variants={marqueeVariant}
        initial="initial"
        animate="animate"
        className="marquee"
      >
        <Typography
          component="span"
          fontWeight="bold"
          fontSize={250}
          letterSpacing={7}
        >
          {'WELCOME WELCOME WELCOME WELCOME'}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -90 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.1, 0.74, 0.4, 0.9],
            duration: 1.2,
          },
        }}
        style={{
          opacity: opacityRange,
        }}
        className="landing-caption"
      >
        <Typography variant="caption" fontSize={25} letterSpacing={6}>
          DAVID FENG
        </Typography>
        <Typography fontSize={25} fontStyle={'italics'} letterSpacing={6}>
          SOFTWARE ENGINEER
        </Typography>
        <Typography fontSize={25} fontStyle={'italics'} letterSpacing={6}>
          BASED IN TORONTO
        </Typography>
      </motion.div>
    </div>
  );
};

export default Landing;
