import ParamSlider from '../../../components/ParamSlider';

import { Box, Button, Divider, Grid, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(() => ({
  variant: 'contained',
}));

const BlochSphereControls = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography align="center"> States </Typography>
        <Grid item xs={6}>
          <Typography variant="caption"> Base States </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="small">
              | 0 &gt;
            </Button>
            <Button variant="contained" size="small">
              | 1 &gt;
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption"> Superposition </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="small">
              | 0 &gt;
            </Button>
            <Button variant="contained" size="small">
              | 1 &gt;
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center"> Operators </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="small">
            Hadamard
          </Button>
          <Button variant="contained" size="small">
            X
          </Button>
          <Button variant="contained" size="small">
            Y
          </Button>
          <Button variant="contained" size="small">
            Z
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center"> State Parameters </Typography>
        <ParamSlider katexString="\theta" />
        <ParamSlider katexString="\phi" />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center"> Data </Typography>
      </Grid>
    </>
  );
};

export default BlochSphereControls;
