import BlochSphere from '../apps/quantum/blochSphere/BlochSphereRender';
import BLochSphereControls from '../apps/quantum/blochSphere/BlochSphereControls';
import BlochSphereDescription from '../apps/quantum/blochSphere/BlochSphereDescription';

import { Grid, Paper } from '@mui/material';

import create from 'zustand';

export const [useStore, api] = create((set) => ({
  phi: 0,
  theta: 0,
  setter: (type: string) => {
    if (type === 'phi') {
      set((state: any) => ({ phi: state.value }));
    } else if (type === 'theta') {
      set((state: any) => ({ phi: state.value }));
    }
  },
}));

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ height: 1, padding: '1em' }}
      columnSpacing={2}
    >
      <Grid container item xs={8} sx={{ padding: '0.5em', border: 1, borderRadius: 1 }}>
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

export default Home;
