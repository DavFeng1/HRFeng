import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '@pages/home';
import BlochSpherePage from '@pages/BlochSphere';
import Contact from '@pages/contact';

import Layout from '@components/react/Layout';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blochSphere" element={<BlochSpherePage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
