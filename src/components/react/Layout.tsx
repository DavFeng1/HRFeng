import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import TopBar from '@components/react/TopBar';

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

const Layout = (): JSX.Element => {
  return (
    <Grid container data-scroll>
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item container>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
        >
          <Outlet />
        </motion.main>
      </Grid>
    </Grid>
  );
};

export default Layout;
