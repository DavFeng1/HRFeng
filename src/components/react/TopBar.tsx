import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';

import { motion, useTransform } from 'framer-motion';

import { cubicBezier } from 'popmotion';

import { Link } from 'react-router-dom';

import { useHomePageStore } from '@pages/home';

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
            <Link to="/" style={{ textDecoration: 'none' }}>
              home
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/blochSphere" style={{ textDecoration: 'none' }}>
              Projects
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default TopBar;
