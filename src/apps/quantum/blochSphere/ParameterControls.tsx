import React from 'react';

import katex from 'katex';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import { useStore } from '@pages/BlochSphere';

const Input = styled(MuiInput)`
  width: 42px;
`;

const ParameterControls = () => {
  const phi = useStore((state) => state.phi);
  const theta = useStore((state) => state.theta);

  const katexPhiInnerHTML = { __html: katex.renderToString('\\phi') };
  const katexThetaInnerHTML = { __html: katex.renderToString('\\theta') };

  const handlePhiSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      useStore.setState({ phi: newValue });
    }
  };

  const handlePhiInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value === '' ? 0 : Number(event.target.value);

    useStore.setState({ phi: inputValue });
  };

  const handleThetaSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      useStore.setState({ theta: newValue });
    }
  };

  const handleThetaInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value === '' ? 0 : Number(event.target.value);

    useStore.setState({ theta: inputValue });
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div id="input-theta-slider" dangerouslySetInnerHTML={katexThetaInnerHTML} />
        </Grid>
        <Grid item xs>
          <Slider
            value={theta}
            onChange={handleThetaSliderChange}
            aria-labelledby="input-theta-slider"
            max={180}
            min={0}
            step={1}
          />
        </Grid>
        <Grid item>
          <Input
            value={theta}
            size="small"
            onChange={handleThetaInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 180,
              type: 'number',
              'aria-labelledby': 'input-theta-slider',
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div id="input-phi-slider" dangerouslySetInnerHTML={katexPhiInnerHTML} />
        </Grid>
        <Grid item xs>
          <Slider
            value={phi}
            onChange={handlePhiSliderChange}
            aria-labelledby="input-phi-slider"
            max={180}
            min={0}
            step={1}
          />
        </Grid>
        <Grid item>
          <Input
            value={phi}
            size="small"
            onChange={handlePhiInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 360,
              type: 'number',
              'aria-labelledby': 'input-phi-slider',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ParameterControls;
