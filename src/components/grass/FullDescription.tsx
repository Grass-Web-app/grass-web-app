import React from "react";
import { Link } from "react-router-dom";
import { ICatalogueBigDescription } from "../../interfaces/catalogue-id-interface";

import {
  DivFullDescContainer,
  DivTrhee,
  H3TitleDesc,
  PDescription,
  PthreeNavigation,
} from "./stylefulldescription";

const FullDescription = (props: {
  information: ICatalogueBigDescription;
  PageTitle: string;
}) => {
  const { information, PageTitle } = props;

  return (
    <DivFullDescContainer>
      <DivTrhee>
        <PthreeNavigation>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            Home
          </Link>
        </PthreeNavigation>
        <PthreeNavigation>{">"}</PthreeNavigation>
        <PthreeNavigation red={true.toString()}> {PageTitle}</PthreeNavigation>
      </DivTrhee>
      <H3TitleDesc>{information?.title}</H3TitleDesc>
      <PDescription>{information?.description}</PDescription>
    </DivFullDescContainer>
  );
};

export default FullDescription;
