import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledStage >
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;

const StyledStage = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  border: 4px solid #303030;
  border-radius: 5px;
  width: 100%;
`