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
    <DivContainerHOC bg={require("../../assets/image/playground-bg.jpeg")}>
      <GlobalStyle />
      {children}
      {show && <Footer />}
    </DivContainerHOC>
  );
};

export default HeaderFooterWraper;
