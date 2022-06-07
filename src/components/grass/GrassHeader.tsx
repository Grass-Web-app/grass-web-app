import React from "react";
import { ICatalogueHeaders } from "../../interfaces/catalogue-id-interface";

import {
  DivHeaderGrassContainer,
  H2HeaderGrass,
  ImgGrassPicture,
} from "./styledheader";

const GrassHeader = (props: { information: ICatalogueHeaders }) => {
  const { information } = props;

  return (
    <DivHeaderGrassContainer>
      <ImgGrassPicture alt="picture bg" src={information?.picture} />
      <H2HeaderGrass> {information?.title}</H2HeaderGrass>
    </DivHeaderGrassContainer>
  );
};

export default GrassHeader;
