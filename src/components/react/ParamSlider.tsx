import React, { useState } from 'react';

import katex from 'katex';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import { useStore } from '../../pages/blochSphere';

const Input = styled(MuiInput)`
  width: 42px;
`;

interface ParamSliderProps {
  max: number;
  min: number;
  katexString: string;
  type: string;
}

const ParamSlider = ({ katexString, type, max, min }: ParamSliderProps) => {
  const [value, setValue] = useState<number>(0);

  const katexInnerHTML = { __html: katex.renderToString(katexString) };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      if (type === 'phi') {
        useStore.setState({ phi: newValue });
      } else if (type === 'theta') {
        useStore.setState({ theta: newValue });
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value === '' ? 0 : Number(event.target.value);

    setValue(inputValue);
    if (type === 'phi') {
      useStore.setState({ phi: inputValue });
    } else if (type === 'theta') {
      useStore.setState({ theta: inputValue });
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <div id="input-slider" dangerouslySetInnerHTML={katexInnerHTML} />
      </Grid>
      <Grid item xs>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          max={max}
          min={min}
          step={1}
        />
      </Grid>
      <Grid item>
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 1,
            min: min,
            max: max,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ParamSlider;
