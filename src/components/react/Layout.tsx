import { Outlet } from 'react-router-dom';

import TopBar from '@components/react/TopBar';

const Layout = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default Layout;
