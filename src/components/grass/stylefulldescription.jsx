import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
} from "../../styles/createGlobalStyles";

export const DivFullDescContainer = styled.div`
  min-height: 30vh;
  height: fit-content;
  padding-left: 1%;
  padding-right: 1%;
  background: #f5f5f5;
  font-size: 4vw;
  @media screen and (min-width: 760px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media screen and (min-width: 1020px) {
    padding-left: 15%;
    padding-right: 15%;
  }
`;

export const DivTrhee = styled.div`
  display: flex;
  ${GetFamilyHeader()}
`;
export const PthreeNavigation = styled.p`
  color: ${(props) => props.red === "true" && "orange"};
  padding-left: 5px;
  font-size: 4vw;
  @media screen and (min-width: 760px) {
    font-size: 2.5vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1.2vw;
  }
`;

export const H3TitleDesc = styled.h2`
  margin-left: 10%;
  margin-right: 10%;
  ${GetFontFamilyHeader()}
  color: grey;
  text-align: center;
  font-size: 4vw;
  @media screen and (min-width: 760px) {
    font-size: 3vw;
  }
  @media screen and (min-width: 1020px) {
    font-size: 1.2vw;
  }
`;

export const PDescription = styled.p`
  margin-left: 2%;
  margin-right: 2%;
  ${GetFontFamilyHeader()}
  color: grey;
  text-align: center;
  font-size: 4vw;
  padding-bottom: 5%;
  @media screen and (min-width: 760px) {
    margin-left: 0%;
    margin-right: 0%;

    font-size: 2.5vw;
  }
  @media screen and (min-width: 1020px) {
    padding-bottom: 2%;
    font-size: 1.2vw;
  }
`;
