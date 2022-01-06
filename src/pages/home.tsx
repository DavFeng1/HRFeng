import React from 'react';

import { Grid } from '@mui/material';

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
        <p>David Feng</p>
      </Grid>
      <Grid item>
        <p> Welcome to my website</p>
      </Grid>
    </Grid>
  );
};

export default Home;
