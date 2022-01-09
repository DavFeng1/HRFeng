import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Divider } from '@mui/material';

const TopBar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }} component="div">
      <AppBar color="transparent" style={{ boxShadow: 'none', backdropFilter: 'blur(1px)' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Feng
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default TopBar;
