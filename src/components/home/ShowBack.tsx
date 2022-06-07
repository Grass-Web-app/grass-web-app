import { useEffect, useState } from "react";
import {
  IparallaxOnlyList,
  IParallListData,
} from "../../interfaces/shoback-interface";
import useAxiosGet from "../Hooks/useAxiosGet";
import { DivBackContainer, Pdescription, PTitle } from "./StyledShowback";

const ShowBack = () => {
  const [ParallaxList, setParallaxList] = useState<null | IparallaxOnlyList>(
    null
  );
  const { Get } = useAxiosGet("parallax/public/", {
    completeInterceptor: {
      action: (data: IParallListData) => {
        setParallaxList(data.data.data[0]);
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
    <DivBackContainer>
      <PTitle>{ParallaxList?.title}</PTitle>
      <Pdescription>{ParallaxList?.description}</Pdescription>
    </DivBackContainer>
  );
};

export default ShowBack;
