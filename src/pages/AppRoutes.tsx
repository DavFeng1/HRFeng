import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';

import Home from '@pages/home/Home';
import Blog from '@pages/blog/Blog';
import Projects from '@pages/projects/Projects';
import Contact from '@pages/contact/Contact';
import Layout from '@components/react/Layout';
import BlochSphere from '@pages/projects/blochSphere/BlochSphere';
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
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
