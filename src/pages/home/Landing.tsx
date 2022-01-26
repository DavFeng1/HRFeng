import { Typography } from '@mui/material';
import { motion, useTransform } from 'framer-motion';
import { useHomePageStore } from '@pages/home';
import { cubicBezier } from 'popmotion';

const Landing = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);

  const opacityRange = useTransform(scrollPosition, [0, 0.3], [1, 0], {
    ease: [cubicBezier(0.9, 0.7, 0.5, 0.3)],
  });

  return (
    <div className="page-container column-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        }}
      >
        <Typography variant="h1"> Welcome </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.1, 0.74, 0.47, 0.97],
            duration: 1,
          },
        }}
        style={{
          opacity: opacityRange,
        }}
      >
        <Typography variant="h4" width={'40ch'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </motion.div>
    </div>
  );
};

export default Landing;
