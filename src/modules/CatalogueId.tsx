import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ICatalogueCarouselDescription,
  IDataApi,
  IDataCatalogue,
} from "../interfaces/catalogue-id-interface";
import CardsOfPics from "../components/grass/CardsOfPics";
import CarouselGrass from "../components/grass/CarouselGrass";
import FullDescription from "../components/grass/FullDescription";
import GrassHeader from "../components/grass/GrassHeader";
import { DivGrassDescription } from "../components/grass/styledgrass";
import useAxiosGet from "../components/Hooks/useAxiosGet";
import HeaderFooterWraper from "../components/layout/InitWraper";
import RedirectTo404 from "./RedirectTo404";

const CatalogueId = () => {
  let params = useParams();
  const Name: string = `${params?.name}`;
  const Id = Name.split("ghf-")[1];
  const [Contenido, setContenido] = useState<IDataCatalogue | null>(null);
  const [Carousel, setCarousel] = useState<string[]>([]);
  const [NoData, setNoData] = useState(false);
  const { Get } = useAxiosGet(`catalogues/public/catalogue/${Id}`, {
    completeInterceptor: {
      action: (dat: IDataApi) => {
        setContenido(dat.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
      action: () => {
        setNoData(true);
      },
    },
  });

  useEffect(() => {
    if (Id !== undefined) {
      Get();
    }
  }, [Id]);

  useEffect(() => {
    if (Contenido !== null) {
      setCarousel(
        Contenido?.catalogue_carousel_description.map(
          (item: ICatalogueCarouselDescription) => {
            return item.picture;
          }
        )
      );
    }
  }, [Contenido]);
  return (
    <HeaderFooterWraper>
      {NoData && <RedirectTo404 />}
      <DivGrassDescription>
        {Contenido !== null && (
          <GrassHeader information={Contenido?.catalogue_headers[0]} />
        )}
        {Contenido !== null && (
          <FullDescription
            information={Contenido?.catalogue_big_description[0]}
            PageTitle={Contenido?.catalogue_headers[0].title}
          />
        )}
        {Contenido !== null && (
          <CarouselGrass
            information={Contenido?.catalogue_big_card_carousel[0]}
            carousel={Carousel}
          />
        )}
        {Contenido !== null && (
          <CardsOfPics
            information={Contenido?.catalogue_carousel_description}
          />
        )}
      </DivGrassDescription>
    </HeaderFooterWraper>
  );
};

export default CatalogueId;
