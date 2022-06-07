import styled from "styled-components";

export const DivCarouselGrassContainer = styled.div`
  min-height: 65vh;
  height: fit-content;
  display: grid;
  @media screen and (min-width: 760px) {
    grid-template-columns: 50% 50%;
    height: 65vh;
  }
`;

export const DivLeftInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 5% 5% 40% 50%;
  grid-template-areas:
    "icon sub"
    "icon title"
    ". Desc"
    ". bene";
  padding-left: 1%;
  padding-right: 1%;
  margin-top: 20px;
  @media screen and (min-width: 760px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const DivRightCarousel = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  @media screen and (min-width: 760px) {
    height: 100%;
  }
`;

export const PSubtitleCarousel = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const PTitleCarousel = styled.h4`
  grid-area: ${(props) => props.area};
  margin: 0;
  @media screen and (min-width: 760px) {
    font-size: 2.5vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;
export const DivDescription = styled.div`
  grid-area: ${(props) => props.area};
  height: 100%;
  width: 100%;
`;
export const PdescriptionCaroou = styled.p`
  grid-area: ${(props) => props.area};
  font-size: 3.2vw;
  @media screen and (min-width: 760px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1vw;
  }
`;

export const PBenefitsTitle = styled.p`
  grid-area: ${(props) => props.area};
  @media screen and (min-width: 760px) {
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
  border-color: red;
`;
export const Pbenefits = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 3%;
  font-size: 4.5vw;
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
  height: 100%;
  width: 100%;
`;

export const DivIcon = styled.div`
  grid-area: ${(props) => props.area};

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgIconCarousel = styled.img`
  width: 50%;
  height: auto;
`;
