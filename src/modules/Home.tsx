import Footer from "../components/footer/Footer";
import ShowHeader from "../components/header/ShowHeader";
import CardsBottom from "../components/home/CardsBottom";
import Carousel from "../components/home/Carousel";
import Description from "../components/home/Description";
import Engineered from "../components/home/Engineered";
import GridHover from "../components/home/GridHover";
import ShowBack from "../components/home/ShowBack";
import HeaderFooterWraper from "../components/layout/InitWraper";
import { DivContainerFull } from "../components/home/styledIndex";

const Home = () => {
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
