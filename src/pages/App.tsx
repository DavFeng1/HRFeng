import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from '@pages/home';
import BlochSpherePage from '@pages/BlochSphere';
import Contact from '@pages/contact';

import Layout from '@components/react/Layout';
// import ScrollToTop from '@components/react/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blochSphere" element={<BlochSpherePage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router basename="/">
      {/* <ScrollToTop /> */}
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
