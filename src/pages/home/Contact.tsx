import { Typography } from '@mui/material';
import { Variants, motion } from 'framer-motion';

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
    <div style={{ backgroundColor: 'purple' }} className="page-container row-container">
      <motion.div initial="offscreen" whileInView="onscreen" exit="exit">
        <motion.div variants={thirdPage} style={{ backgroundColor: 'blue' }}>
          <Typography variant="h4" width={'45ch'}>
            conatct me contact me contact me contact me
          </Typography>
        </motion.div>
      </motion.div>
      <div>
        <Typography variant="h4" className="text">
          big ebans
        </Typography>
      </div>
      <div>
        <Typography variant="h4" className="text">
          bigger beans
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
