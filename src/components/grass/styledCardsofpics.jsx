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
  height: fit-content;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: 35% 65%;
    min-height: 25vh;
    height: fit-content;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media screen and (min-width: 1020px) {
    height: 35vh;
    padding-left: 15%;
    padding-right: 15%;
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
  grid-template-rows: 25% 75%;
  grid-template-areas:
    "icon div"
    "desc desc";
  margin-top: 10px;
  height: fit-content;
  height: 100%;
  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
  @media screen and (min-width: 1020px) {
    display: grid;
    margin-top: 0;
    padding-left: 0;
    grid-template-areas:
      "icon div"
      ". desc";
  }
`;

export const Psubtitle = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFamilyHeader()}
  color: grey;
  font-size: 4vw;
  text-align: center;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
    text-align: left;
  }
  @media screen and (min-width: 1020px) {
    font-size: 0.8vw;
  }
`;

export const DivContainerTitles = styled.div`
  grid-area: ${(props) => props.area};
  height: fit-content;
`;
export const H4title = styled.h4`
  grid-area: ${(props) => props.area};
  margin-top: 1rem;
  ${GetFontFamilyHeader()}
  text-align: center;
  @media screen and (min-width: 760px) {
    margin-top: 0;
    font-size: 2.1vw;
    text-align: start;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const DescriptionOnly = styled.p`
  grid-area: ${(props) => props.area};
  ${GetNormalFamily()}
  text-align:center;
  margin-top: 3rem;
  @media screen and (min-width: 760px) {
    margin-top: 0;
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
  width: 100%;
  @media screen and (min-width: 760px) {
    display: none;
  }
  @media screen and (min-width: 1020px) {
    display: flex;
  }
`;

export const ImgIconDescription = styled.img`
  width: 60%;
  @media screen and (min-width: 760px) {
    width: 60%;
  }
  @media screen and (min-width: 1020px) {
    width: 60%;
  }
`;
