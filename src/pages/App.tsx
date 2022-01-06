import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import BlochSphere from './blochSphere';
import Snake from './snake';
import Contact from './contact';
import Layout from '../components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Snake />} />
          <Route path="/blochSphere" element={<BlochSphere />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
