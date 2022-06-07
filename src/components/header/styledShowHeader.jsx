import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
} from "../../styles/createGlobalStyles";

export const DivContainerShow = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 22px -2px black;
  background: white;

  @media screen and (min-width: 768px) {
    height: 35vh;
  }

  @media screen and (min-width: 1024px) {
    min-height: 60vh;
  }
`;
export const DivHidenSee = styled.div`
  height: 25vh;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 75vh;
  }

  @media screen and (min-width: 1024px) {
    min-height: 60vh;
  }
`;
export const DivFrameContainer = styled.div`
  position: relative;
  height: 50vh;
  @media screen and (min-width: 768px) {
    min-height: 75vh;
  }

  @media screen and (min-width: 1024px) {
    min-height: 130vh;
  }
`;
export const KidsFrame = styled.iframe`
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0;
  bottom: 50%;
  margin: auto;
  border: 0 none;
  width: 100%;
  height: 100%;
`;
export const H2Title = styled.h2`
  ${GetFontFamilyHeader()}
  font-weight: 400;
  font-size: 30px;
  margin: 0;
  text-shadow: 1px 1px 2px black;
  color: white;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
`;
export const Pwords = styled.p`
  ${GetFamilyHeader()}
  font-size: 15px;
  margin: 0;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
`;
export const DivWordsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;
