import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';

import { motion, useTransform } from 'framer-motion';

import { cubicBezier } from 'popmotion';

import { Link } from 'react-router-dom';

import { useHomePageStore } from '@pages/home';

import '@components/react/TopBar.scss';

const TopBar = (): JSX.Element => {
  const scrollPosition = useHomePageStore((state) => state.scrollPosition);
  const opacityRange = useTransform(scrollPosition, [0, 0.45], [1, 0], {
    ease: [cubicBezier(0.2, 0.4, 0.8, 0.9)],
  });

  return (
    <motion.div
      style={{
        opacity: opacityRange,
      }}
    >
      <AppBar
        position="fixed"
        style={{ background: 'transparent', boxShadow: 'none', zIndex: 0 }}
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
          <div color="inherit" className="top-bar-button">
            <Link to="/contact" className="top-bar-text">
              CONTACT
            </Link>
            <div className="top-bar-shadow" />
          </div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default TopBar;
