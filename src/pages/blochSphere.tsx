import Latex from 'react-latex';
import BlochSphere from '../engines/BlochSphereEngine';
import text from '../assets/text/blochSphereText';

import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ height: 1, padding: '1em' }}
    >
      <Grid container sx={{ height: 1 }}>
        <Grid item xs={12}>
          <BlochSphere />
        </Grid>
        <Grid item xs={12}>
          <label className="form-label">
            <Latex> $\theta$ value </Latex>
          </label>
          <input type="range" className="form-range"></input>
          <label className="form-label">
            <Latex> $\phi$ value </Latex>
          </label>
          <input type="range" className="form-range"></input>
        </Grid>
      </Grid>
      <Grid item xs={5} sx={{ padding: '1em' }}>
        <h1> Bloch Sphere </h1>
        <p className="explain">{text}</p>
      </Grid>
    </Grid>
  );
};

export default Home;
