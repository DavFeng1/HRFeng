import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import TopBar from '@components/react/TopBar';

const Layout = (): JSX.Element => {
  return (
    <div style={{}}>
      <div>
        <TopBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
