import toast, { Toaster } from 'react-hot-toast';
import { motion, Variants } from 'framer-motion';
import { Typography } from '@mui/material';

import '@pages/contact/Contact.scss';

const contactHeaderVariant: Variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
  },
};

const contactVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const contactItemVariant: Variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Contact = (): JSX.Element => {
  return (
    <div className="page-container">
      <Toaster />
      <motion.div
        variants={contactHeaderVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="contact-header"
      >
        <Typography variant="button" fontSize={200}>
          Let's Work
        </Typography>
      </motion.div>
      <motion.div
        variants={contactVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        id="contact-item-container"
      >
        <motion.div variants={contactItemVariant} className="contact-item">
          <div
            onClick={(e) => {
              navigator.clipboard.writeText('fenghourun@gmail.com');
              toast('Copied to Clipboard');
            }}
          >
            <Typography variant="button" fontSize={75} fontWeight="bold">
              Email
            </Typography>
          </div>
        </motion.div>

        <motion.div variants={contactItemVariant} className="contact-item">
          <div
            onClick={() => {
              window.open('https://github.com/DavFeng1');
            }}
          >
            <Typography variant="button" fontSize={75} fontWeight="bold">
              GitHub
            </Typography>
          </div>
        </motion.div>
        <motion.div variants={contactItemVariant} className="contact-item">
          <div
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/david-feng-25a8b6b1/',
              );
            }}
          >
            <Typography variant="button" fontSize={75} fontWeight="bold">
              LinkedIn
            </Typography>
          </div>
        </motion.div>
        <motion.div variants={contactItemVariant} className="contact-item">
          <div
            onClick={() => {
              window.open(
                'https://drive.google.com/uc?export=download&id=1Pz6RKhd5tx55R3iJ2flTfNvpBr77hlXw',
                '_self',
              );
            }}
          >
            <Typography variant="button" fontSize={75} fontWeight="bold">
              Resume
            </Typography>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
