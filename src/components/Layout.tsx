import React from 'react';

import { motion } from 'framer-motion';
import { Outlet } from 'react-router';
import { Grid } from '@mui/material';

import SideBar from './SideBar';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = (): JSX.Element => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className="main"
          >
            <Outlet />
          </motion.main>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
