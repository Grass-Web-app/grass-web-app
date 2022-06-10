import React from "react";
import {
  DivContainerShow,
  DivFrameContainer,
  DivHidenSee,
  DivWordsContainer,
  H2Title,
  KidsFrame,
  Pwords,
} from "./styledShowHeader";
const ShowHeader = (props: { title: string; subtitle: string }) => {
  const { title, subtitle } = props;
  return (
    <DivContainerShow>
      <DivHidenSee>
        <DivFrameContainer>
          <KidsFrame
            id="heroVideo"
            className="hero__video"
            src="https://player.vimeo.com/video/256136966?background=1"
            allow="autoplay; encrypted-media"
            frameborder="0"
            height="100%"
            width="100%"
          ></KidsFrame>
        </DivFrameContainer>
      </DivHidenSee>

      <DivWordsContainer>
        <H2Title>{title}</H2Title>
        <Pwords>{subtitle}</Pwords>
      </DivWordsContainer>
    </DivContainerShow>
  );
};

export default ShowHeader;
