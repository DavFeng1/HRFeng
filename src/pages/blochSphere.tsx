import BlochSphere from '../apps/quantum/blochSphere/BlochSphereRender';
import BLochSphereControls from '../apps/quantum/blochSphere/BlochSphereControls';
import BlochSphereDescription from '../apps/quantum/blochSphere/BlochSphereDescription';

import { Grid, Paper } from '@mui/material';

import create from 'zustand';

interface someType {
  phi: number;
  theta: number;
  setPhi: (p: number) => void;
  setTheta: (t: number) => void;
}

export const useStore = create<someType>((set) => ({
  phi: 0,
  theta: 0,
  setPhi: (p: number) => set((state) => ({ phi: (p * Math.PI) / 180 })),
  setTheta: (t: number) => set((state) => ({ theta: (t * Math.PI) / 180 })),
}));

const Home = () => {
  const { phi, theta, setPhi, setTheta } = useStore();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ height: 1, padding: '1em' }}
      columnSpacing={2}
    >
      <Grid container item xs={8} sx={{ padding: '0.5em', border: 1, borderRadius: 1 }}>
        <BlochSphere phi={phi} theta={theta} />
      </Grid>
      <Grid container item xs={4}>
        <Paper elevation={1} sx={{ height: 1, padding: '1em' }}>
          <BLochSphereControls setPhi={setPhi} setTheta={setTheta} />
        </Paper>
      </Grid>

      <Grid container item xs={12} sx={{ padding: '1em', height: 1 }}>
        <BlochSphereDescription />
      </Grid>
    </Grid>
  );
};

export default Home;
