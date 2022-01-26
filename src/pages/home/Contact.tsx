import { Variants, motion } from 'framer-motion';
import { Typography } from '@mui/material';

import githubLogo from '@assets/images/github.svg';
import linkedinLogo from '@assets/images/linkedin.svg';

import '@pages/home/Contact.scss';

const thirdPage: Variants = {
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

const Contact = (): JSX.Element => {
  return (
    <div className="page-container contact-container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-header"
      >
        fenghourun@gmail.com
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-box"
        onClick={() => {
          window.open('https://github.com/DavFeng1');
        }}
      >
        <img src={githubLogo} alt="this is github" />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-box"
        onClick={() => {
          window.open('https://www.linkedin.com/in/david-feng-25a8b6b1/');
        }}
      >
        <img
          style={{
            width: '100%',
          }}
          src={linkedinLogo}
          alt="this is linkedin"
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-box"
      >
        Resume
      </motion.div>
    </div>
  );
};

export default Contact;
