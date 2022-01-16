import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';

const TopBar = (): JSX.Element => {
  return (
    <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>
            /home
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to="/blochSphere" style={{ color: '#FFF', textDecoration: 'none' }}>
            /Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none' }}>
            /Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
