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
        <Typography component="p">David Feng</Typography>
      </Grid>
      <Grid item>
        <Typography component="p"> Welcome to my website</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
