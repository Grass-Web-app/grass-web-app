import React, { useEffect, useState } from "react";
import {
  IDataApiCardBottom,
  IDataCards,
} from "../../interfaces/card-bottom-interface";

import useAxiosGet from "../Hooks/useAxiosGet";
import {
  DivCardGrid,
  DivCardImgContainer,
  DivContainerCards,
  DivIconContainer,
  DivLeftTextContainer,
  DivRightTexContainer,
  H4TitleCard,
  ImgCardBottom,
  ImgIconCardBottom,
  PDescription,
  PWords,
} from "./StyledCardBottom";

const CardsBottom = () => {
  const [Cards, setCards] = useState<null | IDataCards[]>(null);
  const { Get } = useAxiosGet("big-cards/public", {
    completeInterceptor: {
      action: (data: IDataApiCardBottom) => {
        setCards(data.data.data);
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
    <DivContainerCards>
      <DivCardGrid>
        <DivLeftTextContainer>
          <DivIconContainer>
            <ImgIconCardBottom src={require("../../assets/image/park.png")} />
          </DivIconContainer>
          <PWords>{Cards !== null && Cards[0]?.subtitle}</PWords>
          <H4TitleCard>{Cards !== null && Cards[0]?.title}</H4TitleCard>
          <PDescription>{Cards !== null && Cards[0]?.description}</PDescription>
        </DivLeftTextContainer>

        {Cards !== null && (
          <DivCardImgContainer>
            <ImgCardBottom alt="grass img" src={Cards[0]?.image} />
          </DivCardImgContainer>
        )}
      </DivCardGrid>
      <DivCardGrid>
        {Cards !== null && (
          <DivCardImgContainer>
            <ImgCardBottom alt="grass img" src={Cards[1]?.image} />
          </DivCardImgContainer>
        )}
        <DivRightTexContainer>
          <DivIconContainer>
            <ImgIconCardBottom src={require("../../assets/image/mexico.png")} />
          </DivIconContainer>
          {Cards !== null && <PWords>{Cards[1]?.subtitle}</PWords>}
          {Cards !== null && <H4TitleCard>{Cards[1]?.title}</H4TitleCard>}
          {Cards !== null && (
            <PDescription>{Cards[1]?.description}</PDescription>
          )}
        </DivRightTexContainer>
      </DivCardGrid>
    </DivContainerCards>
  );
};

export default CardsBottom;
