import BlochSphereRender from '@apps/quantum/blochSphere/BlochSphereRender';
import BlochSphereControls from '@apps/quantum/blochSphere/BlochSphereControl';
import BlochSphereDescription from '@apps/quantum/blochSphere/BlochSphereDescription';

import { Grid, Paper } from '@mui/material';

import Typography from '@mui/material/Typography';

import create, { GetState, SetState } from 'zustand';
import {
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware';

import { useRef, useState, useEffect } from 'react';

import '@pages/BlochSphere.scss';

// Store phi and theta in radians
type StoreState = {
  phi: number;
  theta: number;
};

const useStore = create<
  StoreState,
  SetState<StoreState>,
  GetState<StoreState>,
  StoreApiWithSubscribeWithSelector<StoreState>
>(
  subscribeWithSelector(() => ({
    phi: 0,
    theta: 0,
  })),
);

const BlochSpherePage = () => {
  const canvasOrbitControlElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('BlochSphere.tsx useEddfect[] mounted ');
    return () => {
      console.log('BlochSphere.tsx useEffect[] unmounted');
      useStore.destroy();
    };
  }, []);

  return (
    <div id="bloch-sphere-container">
      <BlochSphereControls />
      <BlochSphereDescription />
      <BlochSphereRender
        // @ts-ignore
        domElement={canvasOrbitControlElementRef.current}
      />
    </div>
  );
};

export { useStore };
export default BlochSpherePage;
