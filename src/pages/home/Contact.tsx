import { Typography } from '@mui/material';
import { Variants, motion } from 'framer-motion';

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
      duration: 1.6,
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
        className="contact-box"
      >
        fenghourun@gmail.com
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-box"
      >
        <a href="https://github.com/DavFeng1"> GitHub </a>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        className="contact-box"
      >
        <a href="https://www.linkedin.com/in/david-feng-25a8b6b1/">
          Linkedin
        </a>
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
