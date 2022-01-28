import { Variants, motion } from 'framer-motion';
import { Typography } from '@mui/material';

import githubLogo from '@assets/images/github.svg';
import linkedinLogo from '@assets/images/linkedin.svg';

import DownloadIcon from '@mui/icons-material/Download';

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
        <Typography variant="h2">About Me</Typography>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        onClick={() => {
          window.open('https://github.com/DavFeng1');
        }}
        style={{
          textAlign: 'center',
        }}
      >
        <div className="contact-box">
          <img
            style={{
              width: '100%',
            }}
            src={githubLogo}
            alt="this is github"
          />
        </div>
        <div>GitHub</div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        onClick={() => {
          window.open('https://www.linkedin.com/in/david-feng-25a8b6b1/');
        }}
        style={{
          textAlign: 'center',
        }}
      >
        <div className="contact-box">
          <img
            style={{
              width: '100%',
            }}
            src={linkedinLogo}
            alt="this is linkedin"
          />
        </div>
        <div>LinkedIn</div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        variants={thirdPage}
        style={{
          textAlign: 'center',
        }}
      >
        <div className="contact-box">
          <a download href="../assets/images/resume.pdf">
            <DownloadIcon />
          </a>
        </div>
        <div> Resume </div>
      </motion.div>
    </div>
  );
};

export default Contact;
