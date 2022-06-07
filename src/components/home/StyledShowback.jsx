import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
} from "../../styles/createGlobalStyles";

export const DivBackContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export const PTitle = styled.p`
  color: white;
  text-align: center;
  ${GetFontFamilyHeader()}
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const Pdescription = styled.p`
  color: white;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 1rem;

  ${GetFamilyHeader()}
  @media screen and (min-width: 768px) {
    margin-left: 15%;
    margin-right: 15%;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.5rem;
  }
`;
