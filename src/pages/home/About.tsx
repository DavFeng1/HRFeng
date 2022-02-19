import { Variants, motion } from 'framer-motion';
import { Typography } from '@mui/material';

import '@pages/home/About.scss';

const aboutPageHeader: Variants = {
  offscreen: {
    y: 100,
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
};

const aboutPageBody: Variants = {
  offscreen: {
    y: 150,
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
};

const About = (): JSX.Element => {
  return (
    <div className="page-container about-container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageHeader}
        className="about-header"
      >
        <Typography fontSize={90}>Hi, I'm David</Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageBody}
        className="about-text"
      >
        <Typography fontSize={40} width={'25ch'}>
          I'm a software engineer with a background in mathematics and
          physics.
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageBody}
        className="about-text-left"
      >
        <Typography fontSize={40} width={'25ch'}>
          I've worked primarily as a software engineer at numerous startups
          in the Toronto and Bay Area.
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageBody}
        className="about-text-right"
      >
        <Typography fontSize={40} width={'25ch'}>
          Here you'll find a collection of interactive animations projects
          I've been working on.
        </Typography>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageBody}
        className="about-text-left"
      >
        <Typography fontSize={40} width={'25ch'}>
          Mathematics and physics is a passion of mines and I use these
          projects as a means to explore these fields while learning new
          technologies.
        </Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={aboutPageFooter}
        className="about-footer"
      >
        <Typography fontSize={90} width={'25ch'}>
          Enjoy your stay
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
