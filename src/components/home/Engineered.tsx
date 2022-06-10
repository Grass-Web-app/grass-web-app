import React, { useEffect, useState } from "react";
import {
  IEngineeredListData,
  IEngineredOnlyList,
} from "../../interfaces/engineered.interface";

import useAxiosGet from "../Hooks/useAxiosGet";
import {
  DivCardInfo,
  DivContainerEngineered,
  DivContainerSandText,
  DivImgIconContainer,
  DivImgSplit1,
  DivImgSplit2,
  DivImgSplit3,
  DivImgSplit4,
  DivImgSplit5,
  DivSandwichContainer,
  DivTextTitle,
  ImgGrassEngi,
  ImgIcon,
  TextDescriptionInside,
  TextSubTitle,
  TextTitleCard,
  TextTitleCardInside,
} from "./StyledEngineered";

const Engineered = (props: { title: string }) => {
  const { title } = props;
  const [EngineeredList, setEngineeredList] = useState<IEngineredOnlyList[]>(
    []
  );
  const { Get } = useAxiosGet("grasses/public/", {
    completeInterceptor: {
      action: (data: IEngineeredListData) => {
        setEngineeredList(data.data.data);
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
    <DivContainerEngineered>
      <DivSandwichContainer>
        <DivImgSplit1>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../assets/image/split-1.png")}
          />
        </DivImgSplit1>
        <DivImgSplit2>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../assets/image/split-2.png")}
          />
        </DivImgSplit2>
        <DivImgSplit3>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../assets/image/split-3.png")}
          />
        </DivImgSplit3>
        <DivImgSplit4>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../assets/image/split-4.png")}
          />
        </DivImgSplit4>
        <DivImgSplit5>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../assets/image/split-5.png")}
          />
        </DivImgSplit5>
      </DivSandwichContainer>
      <DivContainerSandText>
        <DivTextTitle area="title">
          <TextTitleCard>{title}</TextTitleCard>
        </DivTextTitle>
        {EngineeredList.length !== 0 &&
          EngineeredList.map((item: IEngineredOnlyList, index: number) => {
            const { subtitle, title, description, icon } = item;
            return (
              <DivCardInfo key={index} area={`card${index + 1}`}>
                <TextSubTitle area="sub">{subtitle}</TextSubTitle>
                <TextTitleCardInside area="title">{title}</TextTitleCardInside>
                <TextDescriptionInside area="desc">
                  {description}
                </TextDescriptionInside>
                <DivImgIconContainer area="icon">
                  <ImgIcon alt="icon" src={icon} />
                </DivImgIconContainer>
              </DivCardInfo>
            );
          })}
      </DivContainerSandText>
    </DivContainerEngineered>
  );
};

export default Engineered;
