import styled from "styled-components";
export const DivContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  background: white;

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;
