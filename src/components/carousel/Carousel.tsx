import React, { useEffect, useState } from "react";

import { DivContainerCarousel, ImgCarouselDescription } from "./styledcarousel";
const Carousel = (props: { images: string[]; time: number }) => {
  const { images, time } = props;
  const [state, setState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      nextSig();
    }, time);
  }, [state]);
  function nextSig() {
    if (state < images.length - 1) setState(state + 1);
    else setState(0);
  }

  return (
    <DivContainerCarousel>
      <ImgCarouselDescription alt="img" src={images[state]} />
    </DivContainerCarousel>
  );
};

export default Carousel;
