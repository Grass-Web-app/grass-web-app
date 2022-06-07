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
const ShowHeader = () => {
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
        <H2Title>INNOVATIVE TURF SOLUTIONS</H2Title>
        <Pwords>Designed by Industry Experts</Pwords>
      </DivWordsContainer>
    </DivContainerShow>
  );
};

export default ShowHeader;
