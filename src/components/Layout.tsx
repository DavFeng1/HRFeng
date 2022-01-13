import { motion } from 'framer-motion';

import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import SideBar from './SideBar';
import TopBar from './TopBar';

import { useState } from 'react';

import { styled } from '@mui/material/styles';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Layout = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={2}>
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      </Grid>
      <Grid item xs={10}>
        <Grid item xs={12}>
          <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
        </Grid>
        <Grid item sx={{ height: 1, padding: '3em' }}>
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className="main"
          >
            <Main open={open}>
              <Outlet />
            </Main>
          </motion.main>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
