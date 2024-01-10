import katex from 'katex';

import { useState, useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { useStore } from '@pages/projects/blochSphere/BlochSphere';

import ButtonLowercase from '@components/react/ButtonLowercase';
import ParameterControls from '@apps/quantum/blochSphere/ParameterControls';

const BlochSphereControls = () => {
  const [currentStateLatex, setCurrentStateLatex] = useState<string>('');

  // ================================= LIFE CYCLE =========================================
  useEffect(() => {
    console.log(
      'BlochSphereControl.tsx useEffect[] Mounted and subscribing',
    );
    useStore.subscribe(
      (state) => storeUpdateEffect(state.theta, state.phi),
      console.log,
    );

    return () => {
      console.log('BlochSphereControl.tsx useEffect[] Unmounting');
    };
  }, []);

  const storeUpdateEffect = (theta: number, phi: number) => {
    const alpha = Math.cos(theta / 2);
    const beta = Math.sin(theta / 2);
    const expAlpha = Math.cos(phi);
    const expBeta = Math.sin(phi);

    const firstCoefficient =
      Math.round((alpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientReal =
      Math.round((beta * expAlpha + Number.EPSILON) * 100) / 100;
    const secondCoefficientImaginary =
      Math.round((beta * expBeta + Number.EPSILON) * 100) / 100;

    setCurrentStateLatex(
      `\\ket{\\psi} = ${firstCoefficient} \\ket{0} + (${secondCoefficientReal} + ${secondCoefficientImaginary} i) \\ket{1}`,
    );
  };

  const setZeroState = () => {
    useStore.setState({ phi: 0, theta: 0 });
  };

  const setOneState = () => {
    useStore.setState({ phi: 0, theta: Math.PI });
  };

  const setPlusState = () => {
    useStore.setState({ phi: 0, theta: Math.PI / 2 });
  };

  const setMinusState = () => {
    useStore.setState({
      phi: Math.PI,
      theta: Math.PI / 2,
    });
  };

  const applyPauliX = () => {
    const currTheta = useStore.getState().theta;
    const currPhi = useStore.getState().phi;

    useStore.setState({
      phi: 2 * Math.PI - currPhi,
      theta: Math.PI - currTheta,
    });
  };

  const applyPauliY = () => {
    const currTheta = useStore.getState().theta;
    const currPhi = useStore.getState().phi;

    useStore.setState({
      phi: (3 * Math.PI - currPhi) % Math.PI,
      theta: Math.PI - currTheta,
    });
  };

  const applyPauliZ = () => {
    const currTheta = useStore.getState().theta;
    const currPhi = useStore.getState().phi;

    useStore.setState({
      phi: (3 * Math.PI + currPhi) % Math.PI,
      theta: currTheta,
    });
  };

  const applyHadamard = () => {
    const currTheta = useStore.getState().theta;
    const currPhi = useStore.getState().phi;

    useStore.setState({
      phi: 3 * Math.PI + currPhi,
      theta: currTheta,
    });
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
    <div id="bloch-sphere-controls" className="no-select">
      <div className="bloch-sphere-controls-section">
        <Typography variant="h4" align="center" sx={{ p: '0.5em' }}>
          States
        </Typography>
        <Stack direction="row" spacing={2}>
          <div>
            <Typography variant="h6" noWrap align='center'> Base States </Typography>
            <Stack direction="row" spacing={3} justifyContent='center'>
              <Button variant="contained" size="small" onClick={setZeroState} >
                <span dangerouslySetInnerHTML={katexZeroState} />
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={setOneState}
              >
                <span dangerouslySetInnerHTML={katexOneState} />
              </Button>
            </Stack>
          </div>
          <div>
            <Typography variant="h6" noWrap align='center'>Superposition States</Typography>
            <Stack direction="row" spacing={3} justifyContent='center'>
              <Button variant="contained" size="small" onClick={setPlusState} >
                <span dangerouslySetInnerHTML={katexPlusState} />
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={setMinusState}
              >
                <span dangerouslySetInnerHTML={katexMinusState} />
              </Button>
            </Stack>
          </div>
        </Stack>
      </div>

      <div className="bloch-sphere-controls-section">
        <Typography variant="h4" align="center" sx={{ p: '0.5em' }}>
          Operators
        </Typography>
        <Stack direction="row" spacing={3}>
          <ButtonLowercase
            variant="contained"
            size="small"
            onClick={applyHadamard}
          >
            <span dangerouslySetInnerHTML={katexH} />
          </ButtonLowercase>
          <ButtonLowercase
            variant="contained"
            size="small"
            onClick={applyPauliX}
          >
            <span dangerouslySetInnerHTML={katexSigmaX} />
          </ButtonLowercase>
          <ButtonLowercase
            variant="contained"
            size="small"
            onClick={applyPauliY}
          >
            <span dangerouslySetInnerHTML={katexSigmaY} />
          </ButtonLowercase>
          <ButtonLowercase
            variant="contained"
            size="small"
            onClick={applyPauliZ}
          >
            <span dangerouslySetInnerHTML={katexSigmaZ} />
          </ButtonLowercase>
        </Stack>
      </div>

      <div className="bloch-sphere-controls-section">
        <Typography variant="h4" align="center" sx={{ p: '0.5em' }}>
          State Parameters
        </Typography>
        <ParameterControls />
      </div>

      <div className="bloch-sphere-controls-section">
        <Typography variant="h4" align="center" sx={{ p: '0.5em' }}>
          Current state
        </Typography>

        <Typography sx={{ textAlign: 'center' }} p={5}>
          <span
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(currentStateLatex),
            }}
          />
        </Typography>
      </div>
    </div>
  );
};

export default BlochSphereControls;
