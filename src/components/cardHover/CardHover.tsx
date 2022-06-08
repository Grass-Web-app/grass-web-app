import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DivContainerCard,
  DivContainerHover,
  DivImgCOntainer,
  DivRelativeBlack,
  DivRelativeOne,
  DivRelativeTwo,
  H2Desc,
  H2DescHide,
  ImgHover,
  PText,
  PTitle,
} from "./styledCardHover";
const CardHover = (props: {
  Title: string;
  SubTitle: string;
  Description: string;
  img: string;
  id: number;
}) => {
  const { Title, SubTitle, Description, img, id } = props;
  const GotoGrass = (id: string) => {
    localStorage.setItem("FustadesingCatalogue", id);
  };
  const [ShowAnimation, setShowAnimation] = useState(false);
  const handleMouseOver = () => {
    setShowAnimation(true);
  };
  const handleMouseOut = () => {
    setShowAnimation(false);
  };
  return (
    <Link to={`catalogue/${Title.replaceAll(" ", "-")}-ghf-${id}`}>
      <DivContainerHover
        onClick={() => GotoGrass(`${id}`)}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
      >
        <DivImgCOntainer>
          <ImgHover alt="grass" src={img} />
        </DivImgCOntainer>
        <DivRelativeOne>
          <H2Desc animation={ShowAnimation.toString()}>{Title}</H2Desc>
        </DivRelativeOne>
        <DivRelativeBlack
          animation={ShowAnimation.toString()}
        ></DivRelativeBlack>
        <DivRelativeTwo animation={ShowAnimation.toString()}>
          <DivContainerCard>
            <PTitle animation={(!ShowAnimation).toString()}>{SubTitle}</PTitle>
            <H2DescHide animation={(!ShowAnimation).toString()}>
              {Title}
            </H2DescHide>
            <PText animation={(!ShowAnimation).toString()}>{Description}</PText>
          </DivContainerCard>
        </DivRelativeTwo>
      </DivContainerHover>
    </Link>
  );
};

export default CardHover;
