import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from '@mui/material';

import Latex from 'react-latex';

import text from '../../../assets/text/blochSphereText';
import overviewText from '@assets/text/blochSphereOverview';
import backgroundText from '@assets/text/blochSphereBackground';

const BlochSphereDescription = () => {
  return (
    <div id="bloch-sphere-description">
      <div id="bloch-sphere-description-title">
        <Typography variant="h4">The Bloch Sphere</Typography>
        <Divider />
        <div className="bloch-sphere-description-body">
          <Typography variant="body1" className="text">
            {overviewText}
          </Typography>
        </div>
      </div>

      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography variant="h5"> Background </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-body">
            <Typography className="text">{backgroundText}</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography variant="h5"> Definition </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-body">
            <Typography className="text"> {text} </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography variant="h5"> Operators </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-body">
            <Typography className="text">{text}</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography variant="h5">
              <Latex>What is $\sigma_x$</Latex>
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-body">
            <Typography className="text">{text}</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BlochSphereDescription;
