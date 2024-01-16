import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';

import Home from '@pages/home/Home';
import Notes from '@pages/notes/Notes';
import Simulations from '@pages/simulations/Simulations';
import Contact from '@pages/contact/Contact';
import Layout from '@components/react/Layout';
import BlochSphere from '@pages/simulations/blochSphere/BlochSphere';
import { AnimatePresence } from 'framer-motion';

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blochSphere" element={<BlochSphere />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppRoutes />
    </Router>
  );
};

export default App;
