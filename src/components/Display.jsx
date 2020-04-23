import React from 'react';
import styled from 'styled-components';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display;

const StyledDisplay = styled.div`
  width: calc(50% - 5px);
  box-sizing: border-box;
  display: flex;
  align-items: center; 
  justify-content: center;
  height: 40px;
  border: 4px solid #333;
  border-radius: 5px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;