import React from "react";

import { GlobalStyle } from "../../styles/createGlobalStyles";

import { DivContainerHOC } from "./styledHOC";
import Footer from "../footer/Footer";

const HeaderFooterWraper = ({
  children,
  show = true,
}: {
  children: any;
  show?: boolean;
}) => {
  return (
    <DivContainerHOC
      bg={require("../../assets/image/playground-bg.jpeg")}
    >
      <GlobalStyle />

      <head>
        <title>Fustadesing</title>
        <link rel="icon" href={"/pasto.png"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link key={0} rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Raleway:wght@100;400&family=Source+Sans+Pro:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </head>
      {children}
      {show && <Footer />}
    </DivContainerHOC>
  );
};

export default HeaderFooterWraper;
