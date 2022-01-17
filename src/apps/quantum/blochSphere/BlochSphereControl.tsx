import katex from 'katex';

import { useState, useEffect } from 'react';
import { Button, Divider, Grid, Typography, Stack } from '@mui/material';

import { useStore } from '@pages/BlochSphere';

import ButtonLowercase from '@components/react/ButtonLowercase';

import ParameterControls from '@apps/quantum/blochSphere/ParameterControls';

const BlochSphereControls = () => {
  const [currentStateLatex, setCurrentStateLatex] = useState<string>('');

  // ================================= LIFE CYCLE =========================================
  useEffect(
    () => useStore.subscribe((state) => storeUpdateEffect(state.theta, state.phi), console.log),
    [],
  );

  const storeUpdateEffect = (thetaVal: number, phiVal: number) => {
    const theta = (thetaVal * Math.PI) / 180;
    const phi = (phiVal * Math.PI) / 180;

    const alpha = Math.cos(theta / 2);
    const beta = Math.sin(theta / 2);
    const expAlpha = Math.cos(phi);
    const expBeta = Math.sin(phi);

    const firstCoefficient = Math.round((alpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientReal = Math.round((beta * expAlpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientImaginary = Math.round((beta * expBeta + Number.EPSILON) * 100) / 100;

    setCurrentStateLatex(
      `\\ket{\\psi} = ${firstCoefficient} \\ket{0} + (${secondCoefficientReal} + ${secondCoefficientImaginary} i) \\ket{1}`,
    );
  };

  const setZeroState = () => {
    useStore.setState({ phi: 0, theta: 0 });
  };

  const setOneState = () => {
    useStore.setState({ phi: 0, theta: 180 });
  };

  const setPlusState = () => {
    useStore.setState({ phi: 0, theta: 90 });
  };

  const setMinusState = () => {
    console.log('set minus');
    useStore.setState({
      phi: 180,
      theta: 90,
    });
  };

  const applyPauliX = () => {
    console.log('pauli x');
  };
  const applyPauliY = () => {
    console.log('pauli Y');
  };

  const applyPauliZ = () => {
    console.log('pauli z');
  };

  const applyHadamard = () => {
    console.log('hadamard');
  };

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
            <Button variant="contained" size="small" onClick={setZeroState}>
              <span dangerouslySetInnerHTML={katexZeroState} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small" onClick={setOneState}>
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
            <Button variant="contained" size="small" onClick={setPlusState}>
              <span dangerouslySetInnerHTML={katexPlusState} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="small" onClick={setMinusState}>
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
          <ButtonLowercase variant="contained" size="small" onClick={applyHadamard}>
            <span dangerouslySetInnerHTML={katexH} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small" onClick={applyPauliX}>
            <span dangerouslySetInnerHTML={katexSigmaX} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small" onClick={applyPauliY}>
            <span dangerouslySetInnerHTML={katexSigmaY} />
          </ButtonLowercase>
          <ButtonLowercase variant="contained" size="small" onClick={applyPauliZ}>
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
        <ParameterControls />
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
