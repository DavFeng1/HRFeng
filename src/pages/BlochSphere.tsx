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

  const [refReady, setRefReady] = useState(false);

  console.log('BlochSphere.tsx useEffect[] mounted ');
  useEffect(() => {
    setRefReady(true);

    return () => {
      console.log('BlochSphere.tsx useEffect[] unmounted');
      useStore.destroy();
    };
  }, []);

  return (
    <>
      <Typography variant="h1"> The Bloch Sphere </Typography>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'center',
        }}
        ref={canvasOrbitControlElementRef}
      >
        <Paper elevation={1} sx={{ height: 1, padding: '1em' }}>
          <BlochSphereControls />
        </Paper>

        <BlochSphereDescription />
      </div>
      {refReady && (
        <BlochSphereRender
          domElement={canvasOrbitControlElementRef.current}
        />
      )}
    </>
  );
};

export { useStore };
export default BlochSpherePage;
