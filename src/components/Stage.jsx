import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledStage >
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
