import katex from 'katex';

import { useState, useEffect } from 'react';
import { Button, Divider, Grid, Typography, Stack } from '@mui/material';

import { useStore } from '../../../pages/blochSphere';

import ButtonLowercase from '../../../components/react/ButtonLowercase';
import ParamSlider from '../../../components/react/ParamSlider';

const BlochSphereControls = () => {
  const [phi, setPhi] = useState<number>(0);
  const [theta, setTheta] = useState<number>(0);

  const [currentStateLatex, setCurrentStateLatex] = useState('\\ket{\\psi}');

  useStore.subscribe(
    (state) => state.phi,
    (updatedPhi) => setPhi((updatedPhi * Math.PI) / 180),
  );

  useStore.subscribe(
    (state) => state.theta,
    (updatedTheta) => setTheta((updatedTheta * Math.PI) / 180),
  );

  useEffect(() => {
    const alpha = Math.cos(theta / 2);

    const beta = Math.sin(theta / 2);

    const expAlpha = Math.cos(phi);

    const expBeta = Math.sin(phi);

    const firstCoefficient = Math.round((alpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientReal = Math.round((beta + expAlpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientImaginary = Math.round((beta + expBeta + Number.EPSILON) * 100) / 100;

    setCurrentStateLatex(
      `\\ket{\\psi} = ${firstCoefficient} \\ket{0} + (${secondCoefficientReal} + i ${secondCoefficientImaginary}) \\ket{1}`,
    );
  }, [phi, theta]);

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

      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography align="center" sx={{ p: '0.5em' }}>
            Current state
          </Typography>

          <Typography sx={{ textAlign: 'center' }} p={5}>
            <span dangerouslySetInnerHTML={{ __html: katex.renderToString(currentStateLatex) }} />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BlochSphereControls;
