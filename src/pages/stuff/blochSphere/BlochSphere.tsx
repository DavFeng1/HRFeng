import { useEffect } from 'react';
import create, { GetState, SetState } from 'zustand';
import {
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware';
import { motion, Variants } from 'framer-motion';

import BlochSphereRender from '@apps/quantum/blochSphere/BlochSphereRender';
import BlochSphereControls from '@apps/quantum/blochSphere/BlochSphereControl';

import '@pages/stuff/blochSphere/BlochSphere.scss';

// Store phi and theta in radians
type BlochSphereStore = {
  phi: number;
  theta: number;
};

const useStore = create<
  BlochSphereStore,
  SetState<BlochSphereStore>,
  GetState<BlochSphereStore>,
  StoreApiWithSubscribeWithSelector<BlochSphereStore>
>(
  subscribeWithSelector(() => ({
    phi: 0,
    theta: 0,
  })),
);

const pageTransitionVariant: Variants = {
  exit: {
    opacity: 0,
  },
};

const BlochSpherePage = () => {
  useEffect(() => {
    console.log('BlochSphere.tsx ==> mounted ');

    return () => {
      console.log('BlochSphere.tsx ==> unmounted');
      useStore.destroy();
    };
  }, []);

  return (
    <motion.div variants={pageTransitionVariant} exit="exit">
      <div id="bloch-sphere-container">
          <div id="bloch-sphere-render-section">
            <BlochSphereControls />
            <BlochSphereRender />
          </div>
      </div>
    </motion.div>
  );
};

export { useStore };
export default BlochSpherePage;
