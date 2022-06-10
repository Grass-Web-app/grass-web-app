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
import useAxiosGet from "../components/Hooks/useAxiosGet";
import { useEffect, useState } from "react";
import { IDataApiTitles, IDataTitles } from "../interfaces/home-interface";

const Home = () => {
  const [Contenidos, setContenidos] = useState<IDataTitles | null>(null);
  const { Get } = useAxiosGet("main/public/", {
    completeInterceptor: {
      action: (data: IDataApiTitles) => {
        setContenidos(data?.data?.data[0]);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    Get();
  }, []);
  return (
    <HeaderFooterWraper show={false}>
      <DivContainerFull>
        {Contenidos !== null && (
          <ShowHeader
            title={Contenidos?.header_title}
            subtitle={Contenidos?.header_subtitle}
          />
        )}
        {Contenidos !== null && (
          <Description
            title={Contenidos?.catalogue_title}
            subtitle={Contenidos?.catalogue_subtitle}
          />
        )}
        <GridHover />
        {Contenidos !== null && <Engineered title={Contenidos?.grass_title} />}

        <ShowBack />
        {Contenidos !== null && (
          <Carousel
            title={Contenidos?.carousel_title}
            subtitle={Contenidos?.carousel_subtitle}
          />
        )}
        <CardsBottom />
        <Footer />
      </DivContainerFull>
    </HeaderFooterWraper>
  );
};

export default Home;
