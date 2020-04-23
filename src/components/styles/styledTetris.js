import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #303030;
  /* border: 4px solid red; */
`;

export const StyledTetris = styled.div`
  box-sizing: border-box;
  /* border: 40px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: black;
  /* padding: 0 40px; */
  margin: 0 50px;
  max-width: 400px;

  .scores {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
  }
`;
