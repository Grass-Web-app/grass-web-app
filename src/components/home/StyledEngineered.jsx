import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../styles/createGlobalStyles";

export const DivContainerEngineered = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: 100%;
  background: white;
  @media screen and (min-width: 768px) {
    grid-template-columns: 100%;
    height: fit-content;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 40% 60%;
    height: fit-content;
  }
`;

export const DivSandwichContainer = styled.div`
  position: relative;
  height: 70vh;
  @media screen and (min-width: 768px) {
    height: 80vh;
  }
  @media screen and (min-width: 1024px) {
    height: auto;
  }
`;

export const DivContainerSandText = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "title"
    "card1 "
    "card2"
    "card3"
    "card4"
    "card5"
    "card6";
  height: fit-content;
  padding-left: 10%;
  padding-right: 10%;
  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: 50% 50%;
    grid-template-rows: 19% 27% 27% 27%;
    grid-template-areas:
      "title title"
      "card1 card2"
      "card3 card4"
      "card5 card6";
  }

  @media screen and (min-width: 1024px) {
    height: auto;
    padding-left: 5%;
    padding-right: 30%;
    padding-bottom: 10%;
    padding-top: 10%;
  }
`;

export const DivImgSplit1 = styled.div`
  border-color: red;
  position: absolute;
  top: 0;
  bottom: 50%;
  height: fit-content;
  margin: auto;
  z-index: 5;
`;

export const DivImgSplit2 = styled.div`
  border-color: green;
  position: absolute;
  top: 0;
  bottom: 20%;
  height: fit-content;
  margin: auto;
  z-index: 4;
`;

export const DivImgSplit3 = styled.div`
  border-color: yellow;
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin: auto;
  z-index: 3;
`;

export const DivImgSplit4 = styled.div`
  border-color: blue;
  position: absolute;
  top: 20%;
  bottom: 0;
  height: fit-content;
  margin: auto;
  z-index: 2;
`;

export const DivImgSplit5 = styled.div`
  border-color: purple;
  position: absolute;
  top: 40%;
  bottom: 0;
  height: fit-content;
  margin: auto;
  z-index: 1;
`;

export const ImgGrassEngi = styled.img`
  width: 100%;
  height: auto;
`;

export const DivTextTitle = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;

export const TextTitleCard = styled.h4`
  ${GetFontFamilyHeader()}
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
export const DivCardInfo = styled.div`
  grid-area: ${(props) => props.area};

  display: grid;
  grid-template-columns: 10% 75% 15%;
  grid-template-rows: 20% 20% 60%;
  grid-template-areas:
    "icon sub ."
    "icon title ."
    ". desc .";
`;

export const TextSubTitle = styled.p`
  grid-area: ${(props) => props.area};
  ${GetFamilyHeader()}
  color: gray;
`;

export const TextTitleCardInside = styled.h3`
  grid-area: ${(props) => props.area};
  ${GetFontFamilyHeader()}
`;
export const TextDescriptionInside = styled.p`
  grid-area: ${(props) => props.area};
  ${GetNormalFamily()}
`;

export const DivImgIconContainer = styled.div`
  grid-area: ${(props) => props.area};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgIcon = styled.img`
  width: 50%;
  height: auto;
`;
