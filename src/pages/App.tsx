import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './home';
import BlochSphere from './blochSphere';
import Contact from './contact';
import Layout from '../components/Layout';

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blochSphere" element={<BlochSphere />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
