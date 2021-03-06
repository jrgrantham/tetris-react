import React from 'react';
import styled from 'styled-components';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton;

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  padding: 15px 30px 10px 30px;
  min-height: 30px;
  border-radius: 5px;
  border: none;
  color: #999;
  background: #303030;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`