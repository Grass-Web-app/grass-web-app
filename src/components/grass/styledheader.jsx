import styled from "styled-components";
import { GetFontFamilyHeader } from "../../styles/createGlobalStyles";
export const DivHeaderGrassContainer = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    height: 35vh;
  }

  @media screen and (min-width: 1024px) {
    min-height: 40vh;
  }
`;

export const ImgGrassPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const H2HeaderGrass = styled.h2`
  position: absolute;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8vw;
  ${GetFontFamilyHeader()}
  color: white;
  text-shadow: 1px 1px 2px black;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 7vw;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3vw;
  }
`;
