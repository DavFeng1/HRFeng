import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Landing = (): JSX.Element => {
  return (
    <div className="page-container column-container">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Typography variant="h1">Welcome.</Typography>
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
      >
        <Typography variant="h4" width={'40ch'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </motion.div>
    </div>
  );
};

export default Landing;
