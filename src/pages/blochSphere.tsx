import BlochSphere from '../apps/quantum/blochSphere/BlochSphereRender';
import BLochSphereControls from '../apps/quantum/blochSphere/BlochSphereControls';
import BlochSphereDescription from '../apps/quantum/blochSphere/BlochSphereDescription';

import { Grid, Paper } from '@mui/material';

import create, { GetState, SetState } from 'zustand';
import { StoreApiWithSubscribeWithSelector, subscribeWithSelector } from 'zustand/middleware';

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

const Home = () => {
  return (
    <Grid container direction="row" justifyContent="center" columnSpacing={2}>
      <Grid
        container
        item
        xs={8}
        sx={{ padding: '0.5em', border: 1, borderRadius: 1, height: '450px' }}
      >
        <BlochSphere />
      </Grid>
      <Grid container item xs={4}>
        <Paper elevation={1} sx={{ height: 1, padding: '1em' }}>
          <BLochSphereControls />
        </Paper>
      </Grid>

      <Grid container item xs={12} sx={{ padding: '1em', height: 1 }}>
        <BlochSphereDescription />
      </Grid>
    </Grid>
  );
};

export { useStore };
export default Home;
