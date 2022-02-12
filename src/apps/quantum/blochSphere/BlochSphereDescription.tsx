import * as React from 'react';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from '@mui/material';

import Latex from 'react-latex';

import overviewText from '@assets/text/blochSphereOverview';
import backgroundText from '@assets/text/blochSphereBackground';
import operatorsText from '@assets/text/blochSphereOperators';
import statesText from '@assets/text/blochSphereStates';

const BlochSphereDescription = () => {
  return (
    <div id="bloch-sphere-description">
      <div id="bloch-sphere-description-title">
        <Typography fontSize={70}>The Bloch Sphere</Typography>
        <Divider />
        <div className="bloch-sphere-description-text">{overviewText}</div>
      </div>

      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography fontSize={40}> Background </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-text">
            <Latex>{backgroundText}</Latex>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography fontSize={40}> States </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-text">
            <Latex>{statesText}</Latex>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bloch-sphere-description-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="bloch-sphere-description-heading">
            <Typography fontSize={40}>
              <Latex>Operators</Latex>
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="bloch-sphere-description-text">
            <Latex>{operatorsText}</Latex>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BlochSphereDescription;
