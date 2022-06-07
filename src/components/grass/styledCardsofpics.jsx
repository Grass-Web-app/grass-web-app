import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../styles/createGlobalStyles";

export const DivCardsContainer = styled.div`
  height: fit-content;
`;

export const DivCard = styled.div`
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 1%;
  padding-right: 1%;
  background: ${(props) => props.color};
  height: 70vh;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: 35% 65%;
    height: 25vh;
    padding-left: 5%;
    padding-right: 15%;
  }
  @media screen and (min-width: 1020px) {
    height: 35vh;
    padding-left: 15%;
  }
`;

export const DivImgContainer = styled.div`
  overflow: hidden;
  height: 35vh;
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 760px) {
    height: 96%;
  }
  @media screen and (min-width: 1020px) {
    height: 100%;
  }
`;
export const ImgOnly = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivRightInfo = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 10% 10% 80%;
  grid-template-areas:
    "icon sub"
    "icon title"
    "desc desc";
  @media screen and (min-width: 760px) {
    grid-template-areas:
      "icon sub"
      "icon title"
      ". desc";
  }
`;

export const Psubtitle = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFamilyHeader()}
  color: grey;
  font-size: 4vw;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 0.8vw;
  }
`;

export const H4title = styled.h4`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFontFamilyHeader()}
  color: grey;
  @media screen and (min-width: 760px) {
    font-size: 2.1vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const DescriptionOnly = styled.p`
  grid-area: ${(props) => props.area};
  ${GetNormalFamily()}
  text-align:center;
  @media screen and (min-width: 760px) {
    text-align: start;
    font-size: 2.1vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const Divicon = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgIconDescription = styled.img`
  height: 60%;
  @media screen and (min-width: 760px) {
    height: 60%;
  }
  @media screen and (min-width: 1020px) {
    height: 100%;
  }
`;
