import styled from "styled-components";
import { GetFontFamilyHeader } from "../../styles/createGlobalStyles";

export const DivContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-bottom: 3%;
  width: 100%;
`;

export const PWordDescription = styled.p`
  text-align: center;
  margin-top: 5%;
  width: 75%;
  font-family: "Source Sans Pro", sans-serif;
  color: #777777;
  font-size: 1.15rem;
  line-height: 1.33;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.15rem;
    width: 45%;
  }
`;
export const PWordDescriptionRale = styled.p`
  ${GetFontFamilyHeader()}
  width: 75%;
  text-align: center;

  letter-spacing: 3px;
  line-height: 1.33;
  text-shadow: 1px 1px 2px black;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.5625rem;
    width: 60%;
  }
`;
