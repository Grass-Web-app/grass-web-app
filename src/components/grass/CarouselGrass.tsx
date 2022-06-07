import React, { useEffect, useState } from "react";

import Carousel from "../carousel/Carousel";
import {
  DivBenefits,
  DivBenefitsList,
  DivCarouselGrassContainer,
  DivDescription,
  DivIcon,
  DivLeftInfo,
  DivRightCarousel,
  ImgIconCarousel,
  Pbenefits,
  PBenefitsTitle,
  PdescriptionCaroou,
  PSubtitleCarousel,
  PTitleCarousel,
} from "./Styledcarouselgrass";
import golfImg from "../../assets/icons/icon-golf.svg";
import { ICatalogueBigCardCarousel } from "../../interfaces/catalogue-id-interface";
const caracteres = "%$##$%";

const CarouselGrass = (props: {
  information: ICatalogueBigCardCarousel;
  carousel: string[];
}) => {
  const { information, carousel } = props;
  const [Benefits, setBenefits] = useState<string[]>([]);
  useEffect(() => {
    if (information !== null) {
      if (information?.benefits.includes(caracteres)) {
        setBenefits(information?.benefits.split(caracteres));
      } else if (information?.benefits !== "") {
        setBenefits([information?.benefits]);
      }
    }
  }, [information]);

  return (
    <DivCarouselGrassContainer>
      <DivLeftInfo>
        <DivIcon area="icon">
          <ImgIconCarousel atl="icon" src={golfImg} />
        </DivIcon>
        <PSubtitleCarousel area="sub">
          {information?.subtitle}
        </PSubtitleCarousel>
        <PTitleCarousel area="title">{information?.title}</PTitleCarousel>
        <DivDescription area="Desc">
          <PdescriptionCaroou>{information?.description}</PdescriptionCaroou>
        </DivDescription>
        <DivBenefitsList area="bene">
          <PBenefitsTitle>BENEFICIOS:</PBenefitsTitle>
          <DivBenefits>
            {Benefits.length !== 0 &&
              Benefits.map((item: string, index: number) => {
                return (
                  <Pbenefits key={index}>
                    <span style={{ color: "orange" }}>• </span> {item}
                  </Pbenefits>
                );
              })}
          </DivBenefits>
        </DivBenefitsList>
      </DivLeftInfo>
      <DivRightCarousel>
        {carousel?.length !== 0 && <Carousel time={2000} images={carousel} />}
      </DivRightCarousel>
    </DivCarouselGrassContainer>
  );
};

export default CarouselGrass;
