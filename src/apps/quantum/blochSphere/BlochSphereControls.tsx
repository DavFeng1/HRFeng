import katex from 'katex';

import { useState, useEffect } from 'react';

import { Button, Divider, Grid, Typography, Stack } from '@mui/material';

import ButtonLowercase from '../../../components/ButtonLowercase';

import ParamSlider from '../../../components/ParamSlider';

interface BlochSphereControlsProps {
  setPhi: (phi: number) => void;
  setTheta: (theta: number) => void;
}

const BlochSphereControls = ({ setPhi, setTheta }: BlochSphereControlsProps) => {
  const katexZeroState = { __html: katex.renderToString('\\ket{0}') };
  const katexOneState = { __html: katex.renderToString('\\ket{1}') };

  const katexPlusState = { __html: katex.renderToString('\\ket{+}') };
  const katexMinusState = { __html: katex.renderToString('\\ket{-}') };

  const katexH = { __html: katex.renderToString('H') };
  const katexSigmaX = { __html: katex.renderToString('\\sigma_x') };
  const katexSigmaY = { __html: katex.renderToString('\\sigma_y') };
  const katexSigmaZ = { __html: katex.renderToString('\\sigma_z') };

  return (
    <>
      <Grid container item>
        <Grid item xs={12}>
          <Typography align="center" sx={{ p: '0.5em' }}>
            States
          </Typography>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography variant="caption"> Base States </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small">
              <span dangerouslySetInnerHTML={katexZeroState} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small">
              <span dangerouslySetInnerHTML={katexOneState} />
            </Button>
          </Grid>
        </Grid>
        <Divider orientation="vertical" />

        <Grid container item>
          <Grid item xs={12}>
            <Typography variant="caption"> Superposition States </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small">
              <span dangerouslySetInnerHTML={katexPlusState} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small">
              <span dangerouslySetInnerHTML={katexMinusState} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography align="center" sx={{ p: '0.5em' }}>
            Operators
          </Typography>
        </Grid>
        <Stack direction="row" spacing={2}>
          <ButtonLowercase variant="contained" size="small">
            <span dangerouslySetInnerHTML={katexH} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small">
            <span dangerouslySetInnerHTML={katexSigmaX} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small" style={{ textTransform: 'lowercase' }}>
            <span dangerouslySetInnerHTML={katexSigmaY} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small">
            <span dangerouslySetInnerHTML={katexSigmaZ} />
          </ButtonLowercase>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography align="center" sx={{ p: '0.5em' }}>
            State Parameters
          </Typography>
        </Grid>
        <ParamSlider type={'theta'} katexString="\theta" max={180} min={0} />
        <ParamSlider type={'phi'} katexString="\phi" max={360} min={0} />
      </Grid>
    </>
  );
};

export default BlochSphereControls;
