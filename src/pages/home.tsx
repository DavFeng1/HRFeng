import React from 'react';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{ textAlign: 'center' }}
    >
      <Grid item>
        <Typography component="p">helo</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
