// import React from 'react';
// import { StyledCell } from './styles/StyledCell';
// import { TETROMINOS } from '../tetrominos';

// const Cell = ({ type }) => (
//   <StyledCell type={type} color={TETROMINOS[type].color} />
// )

// export default Cell;

import React from "react";
import styled from "styled-components";
import { TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

const borderThickness = 4;
const cellWidth = 100 / STAGE_WIDTH;
// can now change stage width in gameHelpers

const StyledCell = styled.div`
  box-sizing: border-box;
  width: ${cellWidth}%;
  background: rgba(${(props) => props.color}, 0.8);
  /* need to remove the thickness of the borders from the calculated padding */
  padding-bottom: calc(${cellWidth}% - ${borderThickness * 2}px);

  border: ${borderThickness}px solid;
  border-bottom-color: ${(props) =>
    props.type === 0
      ? `rgba(0, 0, 0, 0)`
      : `rgba(${props.color}, 0.1)`};
  border-right-color: ${(props) =>
    props.type === 0
      ? `rgba(0, 0, 0, 0)`
      : `rgba(${props.color}, 1)`};
  border-top-color: ${(props) =>
    props.type === 0
      ? `rgba(0, 0, 0, 0)`
      : `rgba(${props.color}, 1)`};
  border-left-color: ${(props) =>
    props.type === 0
      ? `rgba(0, 0, 0, 0)`
      : `rgba(${props.color}, 0.3)`};
`;

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  );
};

export default Cell;