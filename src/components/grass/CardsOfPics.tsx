import {
  DescriptionOnly,
  DivCard,
  DivCardsContainer,
  Divicon,
  DivImgContainer,
  DivRightInfo,
  H4title,
  ImgIconDescription,
  ImgOnly,
  Psubtitle,
} from "./styledCardsofpics";
import golf from "../../assets/icons/icon-golf.svg";
import { ICatalogueCarouselDescription } from "../../interfaces/catalogue-id-interface";

const CardsOfPics = (props: {
  information: ICatalogueCarouselDescription[];
}) => {
  const { information } = props;

  return (
    <DivCardsContainer>
      {information.map((item: ICatalogueCarouselDescription, index: number) => {
        let place = "white";
        if (index % 2 === 0) place = "#F3F4F6";
        return (
          <DivCard color={place} key={item.id}>
            <DivImgContainer>
              <ImgOnly alt="image" src={item?.picture} />
            </DivImgContainer>
            <DivRightInfo>
              <Divicon area="icon">
                <ImgIconDescription alt="image" src={golf} />
              </Divicon>
              <Psubtitle area="sub">{item?.subtitle}</Psubtitle>
              <H4title area="title">{item?.title}</H4title>
              <DescriptionOnly area="desc">{item?.description}</DescriptionOnly>
            </DivRightInfo>
          </DivCard>
        );
      })}
    </DivCardsContainer>
  );
};

export default CardsOfPics;
