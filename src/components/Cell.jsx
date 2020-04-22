import React from "react";
import styled from "styled-components";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {

  const borderThickness = 4;

  const StyledCell = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 8.333%;

    /* need to remove the thickness of the borders from the 8.3% */
    padding-bottom: calc(8.3% - ${borderThickness * 2}px);

    background: rgba(${(props) => props.color}, 0.8);
    border: ${(props) => (props.type === 0 ? "0px" : `${borderThickness}px solid`)};
    border-bottom-color: rgba(${(props) => props.color}, 0.1);
    border-right-color: rgba(${(props) => props.color}, 1);
    border-top-color: rgba(${(props) => props.color}, 1);
    border-left-color: rgba(${(props) => props.color}, 0.3);

    div {
      box-sizing: border-box;
      width: 8.3%;
      padding-bottom: 8.3%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `;

  return (
    <StyledCell type={"L"} color={TETROMINOS["L"].color}>
      <div className="cell"></div>
    </StyledCell>
  );
};

export default Cell;
