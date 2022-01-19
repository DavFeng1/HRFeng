import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import TopBar from '@components/react/TopBar';

const Layout = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item container>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
