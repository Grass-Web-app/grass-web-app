import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../styles/createGlobalStyles";

export const DivCarouselGrassContainer = styled.div`
  min-height: 65vh;
  height: fit-content;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 65vh;
  }
`;

export const DivLeftInfo = styled.div`
  width: 100%;
  height: fit-content;

  padding-bottom: 1rem;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 5% 5% 40% 50%;
    grid-template-areas:
      "icon sub"
      "icon title"
      ". Desc"
      ". bene";
    height: 100%;
    padding-bottom: 0;
  }
`;

export const DivRightCarousel = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 760px) {
    height: 100%;
  }
`;
export const DivImgOpacity = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: 2s;
  opacity: ${(props) => (props.opa === "true" ? 0 : 1)};
`;
export const ImgCarouselOpacity = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PSubtitleCarousel = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFamilyHeader()}
  padding-left: 1rem;
  padding-right: 1rem;
  color: grey;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const PTitleCarousel = styled.h4`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFontFamilyHeader()}
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
  @media screen and (min-width: 760px) {
    font-size: 2.5vw;
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;
export const DivDescription = styled.div`
  grid-area: ${(props) => props.area};
  ${GetNormalFamily()}
  height: 100%;
  width: 100%;
`;
export const PdescriptionCaroou = styled.p`
  grid-area: ${(props) => props.area};
  font-size: 4vw;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (min-width: 760px) {
    padding: 0;
    font-size: 1rem;
  }
`;

export const PBenefitsTitle = styled.p`
  ${GetNormalFamily()}
  margin: 0;
  margin-top: 10px;
  grid-area: ${(props) => props.area};
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (min-width: 760px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 2.5vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const DivBenefits = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: fit-content;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
  @media screen and (min-width: 760px) {
    grid-row-gap: 1rem;
    margin-top: 1rem;
    margin-top: 1rem;
  }
`;
export const Pbenefits = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  ${GetNormalFamily()}
  font-size: 4vw;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const DivBenefitsList = styled.div`
  grid-area: ${(props) => props.area};
  grid-template-rows: 10% 90%;
  height: fit-content;
  width: 100%;
  @media screen and (min-width: 760px) {
    height: 100%;
  }
`;

export const DivIcon = styled.div`
  grid-area: ${(props) => props.area};
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 760px) {
    display: flex;
  }
`;

export const ImgIconCarousel = styled.img`
  width: 50%;
  height: auto;
`;
