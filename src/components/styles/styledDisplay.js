import styled from 'styled-components';

export const StyledDisplay = styled.div`
  width: 30%;
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