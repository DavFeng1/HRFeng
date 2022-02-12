import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import '@components/react/TopBar.scss';

const TopBar = (): JSX.Element => {
  return (
    <motion.div>
      <AppBar
        position="fixed"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          zIndex: 99,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="top-bar-text">
              home
            </Link>
          </Typography>
          <div color="inherit" className="top-bar-button">
            <Link to="/blochSphere" className="top-bar-text">
              PROJECTS
            </Link>
            <div className="top-bar-shadow" />
          </div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default TopBar;
