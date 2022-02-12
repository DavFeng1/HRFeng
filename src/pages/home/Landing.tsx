import { Typography } from '@mui/material';
import { motion, useTransform } from 'framer-motion';
import { useHomePageStore } from '@pages/home';
import { cubicBezier } from 'popmotion';

import '@pages/home/Landing.scss';

const Landing = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);

  const opacityRange = useTransform(scrollPosition, [0, 0.3], [1, 0], {
    ease: [cubicBezier(0.9, 0.7, 0.5, 0.3)],
  });

  return (
    <div className="page-container landing-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        }}
      >
        {/* <Typography fontSize={150}> Welcome </Typography> */}
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
      >
        <Typography
          fontSize={'5rem'}
          max-width={'40ch'}
          textAlign={'center'}
          className="responsive-large-text"
        >
          “How small a thought it takes to fill a life.”
        </Typography>
        <Typography
          fontSize={40}
          fontStyle={'italics'}
          width={'40ch'}
          textAlign={'center'}
        >
          ― Ludwig Wittgenstein
        </Typography>
      </motion.div>
    </div>
  );
};

export default Landing;
