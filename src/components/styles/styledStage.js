// import styled from 'styled-components';

// export const StyledStage = styled.div`
//   display: grid;
//   grid-template-rows: repeat(
//     ${props => props.height},
//     calc(25vw / ${props => props.width})
//   );
//   grid-template-columns: repeat(${props => props.width}, 1fr);
//   grid-gap: 1px;
//   border: 2px solid #333;
//   width: 100%;
//   max-width: 25vw;
//   background: #111;
// `;

import styled from 'styled-components';

export const StyledStage = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  padding: 5px;
  border: 10px solid #505050;
  width: 100%;
  /* background: #e3e3e3; */
`