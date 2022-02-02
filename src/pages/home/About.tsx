import { Variants, motion } from 'framer-motion';
import { Typography } from '@mui/material';

import '@pages/home/About.scss';

const aboutPageHeader: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.6, 0.01, 0.5, 0.95],
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const aboutPageBody: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.6, 0.01, 0.5, 0.95],
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
  },
};

const aboutPageFooter: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: [0.6, 0.01, 0.5, 0.95],
      duration: 2.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const About = (): JSX.Element => {
  return (
    <div className="page-container about-container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={aboutPageHeader}
        className="about-header"
      >
        <Typography fontSize={110}>Welcome</Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={aboutPageBody}
        className="about-text"
      >
        <Typography fontSize={40} width={'25ch'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididu
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={aboutPageBody}
        className="about-text-left"
      >
        <Typography fontSize={40} width={'25ch'}>
          Here you'll find a collection of interactive animations inspired
          by concepts from these fields.
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={aboutPageBody}
        className="about-text-right"
      >
        <Typography fontSize={40} width={'25ch'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={aboutPageFooter}
        className="about-footer"
      >
        <Typography fontSize={90} width={'25ch'}>
          Lorem ipsum dolor sit amet
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
