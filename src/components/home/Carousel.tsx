import { useEffect, useState } from "react";

import useAxiosGet from "../Hooks/useAxiosGet";
import {
  ButtonImgArrow,
  DivCarousel,
  DivCarouselContainer,
  DivImgContainer,
  DivMessage,
  DivTextContainer,
  H3Mark,
  H4TitleCarousel,
  ImgArrow,
  ImgCarouselCover,
  LeftArrow,
  PDescriptionCarousel,
  Ptitle,
  RightArrow,
} from "./styledCarousel";
import arrow from "../../assets/icons/signature-arrow-prev.svg";
import {
  IDataApiCarousel,
  IDataCarousels,
} from "../../interfaces/carousel-home-interface";

const Carousel = () => {
  const [CarouselList, setCarouselList] = useState<IDataCarousels[]>([]);
  const { Get } = useAxiosGet("carousels/public/", {
    completeInterceptor: {
      action: (data: IDataApiCarousel) => {
        setCarouselList(data.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });

  useEffect(() => {
    Get();
  }, []);
  const [information, setInformation] = useState(0);
  const handleRight = () => {
    if (information < CarouselList.length - 1) setInformation(information + 1);
    else setInformation(0);
  };
  const handleLeft = () => {
    if (information === 0) setInformation(CarouselList.length - 1);
    else setInformation(information - 1);
  };
  return (
    <DivCarouselContainer>
      <DivMessage>
        <Ptitle>Putting Green Kits</Ptitle>
        <H3Mark>XGRASS PLAYERS SERIES</H3Mark>
      </DivMessage>
      <DivCarousel>
        <LeftArrow area="Larr">
          <ButtonImgArrow onClick={handleLeft}>
            <ImgArrow alt="img" src={arrow} />
          </ButtonImgArrow>
        </LeftArrow>
        <DivTextContainer area="des">
          <H4TitleCarousel>{CarouselList[information]?.title}</H4TitleCarousel>
          <PDescriptionCarousel>
            {CarouselList[information]?.description}
          </PDescriptionCarousel>
        </DivTextContainer>
        <DivImgContainer area="img">
          <ImgCarouselCover
            alt="img carousel"
            src={CarouselList[information]?.image}
          />
        </DivImgContainer>
        <RightArrow area="Rarr">
          <ButtonImgArrow onClick={handleRight}>
            <ImgArrow rotate={true.toString()} alt="img" src={arrow} />
          </ButtonImgArrow>
        </RightArrow>
      </DivCarousel>
    </DivCarouselContainer>
  );
};

export default Carousel;
