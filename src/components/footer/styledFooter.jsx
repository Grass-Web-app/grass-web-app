import styled from "styled-components";
import { GetNormalFamily } from "../../styles/createGlobalStyles";

export const DivFooterContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  background: #2c2d2e;
  box-shadow: inset 0 0 25px 20px black;
  padding-top: 2%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DivLeftContact = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5%;
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: end;
  }
`;
export const DivInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: fit-content;
    height: fit-content;
  }
  @media screen and (min-width: 1024px) {
    display: inline;
    width: fit-content;
    height: fit-content;
  }
`;
export const DivCenterMarks = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". rg rg ."
    "versa tour swi ice"
    ". out dura .";
`;

export const DivRightFollow = styled.div`
  height: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 5%;
  }
`;

export const PtextDir = styled.p`
  color: white;
  ${GetNormalFamily()}
  text-align: center;
  width: 100;
  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const DivImgMark = styled.div`
  height: 10vh;
  width: 15vh;
`;

export const ImgMArk = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivIconsContainer = styled.div`
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 5vh;
    height: 5vh;
    margin: 1vh;
    display: inline;
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const ImgIcons = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivIconsContainersFlex = styled.div`
  display: flex;
`;

export const DivContainerMark = styled.div`
  grid-area: ${(props) => props.area};

  display: flex;
  align-items: center;
`;

export const ImgLogos = styled.img`
  width: 100%;
`;
