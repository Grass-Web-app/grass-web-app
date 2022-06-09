import { useEffect, useState } from "react";

import {
  DivBenefits,
  DivBenefitsList,
  DivCarouselGrassContainer,
  DivDescription,
  DivIcon,
  DivImgOpacity,
  DivLeftInfo,
  DivRightCarousel,
  ImgCarouselOpacity,
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
  const time = 4000;
  const [showThisPicture, setShowThisPicture] = useState<number>(0);
  useEffect(() => {
    if (information !== null) {
      if (information?.benefits.includes(caracteres)) {
        setBenefits(information?.benefits.split(caracteres));
      } else if (information?.benefits !== "") {
        setBenefits([information?.benefits]);
      }
    }
  }, [information]);
  useEffect(() => {
    if (carousel.length !== 0) {
      if (showThisPicture < carousel.length - 1)
        setTimeout(() => {
          setShowThisPicture(showThisPicture + 1);
        }, time);
      else
        setTimeout(() => {
          setShowThisPicture(0);
        }, time);
    }
  }, [showThisPicture, carousel]);

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
        {carousel.length !== 0 &&
          carousel.map((item: string, index: number) => {
            let showMee = false;
            if (showThisPicture === index) showMee = true;
            return (
              <DivImgOpacity opa={showMee.toString()} key={index}>
                <ImgCarouselOpacity src={item} />
              </DivImgOpacity>
            );
          })}
      </DivRightCarousel>
    </DivCarouselGrassContainer>
  );
};

export default CarouselGrass;
