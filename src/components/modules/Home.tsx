import { useEffect } from "react";
import Footer from "../footer/Footer";
import ShowHeader from "../header/ShowHeader";
import CardsBottom from "../home/CardsBottom";
import Carousel from "../home/Carousel";
import Description from "../home/Description";
import Engineered from "../home/Engineered";
import GridHover from "../home/GridHover";
import ShowBack from "../home/ShowBack";
import { DivContainerFull } from "../home/styledIndex";
import HeaderFooterWraper from "../layout/InitWraper";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("FustadesingCatalogue") == null) {
      localStorage.setItem("FustadesingCatalogue", "");
    }
  }, []);
  return (
    <HeaderFooterWraper show={false}>
      <DivContainerFull>
        <ShowHeader />
        <Description />
        <GridHover />
        <Engineered />
        <ShowBack />
        <Carousel />
        <CardsBottom />
        <Footer />
      </DivContainerFull>
    </HeaderFooterWraper>
  );
};

export default Home;
