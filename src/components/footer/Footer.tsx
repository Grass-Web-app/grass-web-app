import React, { useEffect, useState } from "react";
import useAxiosGet from "../Hooks/useAxiosGet";
import mex from "../../assets/image/mexico.png";
import face from "../../assets/icons/icons8-facebook-nuevo.svg";
import pinter from "../../assets/icons/icons8-pinterest.svg";
import youtube from "../../assets/icons/icons8-youtube-play.svg";
import twitter from "../../assets/icons/icons8-twitter.svg";
import instagram from "../../assets/icons/icons8-instagram.svg";
import linkedIn from "../../assets/icons/icons8-linkedin.svg";

import logo1 from "../../assets/image/logo 1.png";
import logo2 from "../../assets/image/logo 2.png";
import logo3 from "../../assets/image/logo 3.png";
import logo4 from "../../assets/image/logo 4.png";
import logo5 from "../../assets/image/logo 5.png";
import logo6 from "../../assets/image/logo 6.png";
import logo7 from "../../assets/image/logo 7.png";

import {
  DivCenterMarks,
  DivContainerMark,
  DivFooterContainer,
  DivIconsContainer,
  DivIconsContainersFlex,
  DivImgMark,
  DivInfoContainer,
  DivLeftContact,
  DivRightFollow,
  ImgIcons,
  ImgLogos,
  ImgMArk,
  PtextDir,
} from "./styledFooter";
import {
  IFooterListData,
  IFooterOnlyList,
} from "../../interfaces/footer-interface";

const Footer = () => {
  const [FooterInfo, setFooterInfo] = useState<IFooterOnlyList | null>(null);
  const { Get } = useAxiosGet("footer/public/", {
    completeInterceptor: {
      action: (data: IFooterListData) => {
        if (data.data.data.length !== 0) setFooterInfo(data.data.data[0]);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    Get();
  }, []);

  function GotoURL(url: string) {
    window.open(url, "_blank");
  }
  return (
    <DivFooterContainer>
      {FooterInfo !== null && (
        <>
          <DivLeftContact>
            <DivInfoContainer>
              <DivImgMark>
                <ImgMArk alt="logo" src={mex} />
              </DivImgMark>
              <PtextDir>{FooterInfo.name}</PtextDir>
              <PtextDir>{FooterInfo.address}</PtextDir>
              <PtextDir>{FooterInfo.additional}</PtextDir>
              <PtextDir>{FooterInfo.cell_phone}</PtextDir>
              <PtextDir>{FooterInfo.local_phone}</PtextDir>
              <PtextDir>
                © 2022 {FooterInfo.name} | All Rights Reserved.
              </PtextDir>
            </DivInfoContainer>
          </DivLeftContact>
          <DivCenterMarks>
            <DivContainerMark area="rg">
              <ImgLogos alt="mark logo" src={logo1} />
            </DivContainerMark>
            <DivContainerMark area="versa">
              <ImgLogos alt="mark logo" src={logo2} />
            </DivContainerMark>
            <DivContainerMark area="tour">
              <ImgLogos alt="mark logo" src={logo3} />
            </DivContainerMark>
            <DivContainerMark area="swi">
              <ImgLogos alt="mark logo" src={logo4} />
            </DivContainerMark>
            <DivContainerMark area="ice">
              <ImgLogos alt="mark logo" src={logo5} />
            </DivContainerMark>
            <DivContainerMark area="out">
              <ImgLogos alt="mark logo" src={logo6} />
            </DivContainerMark>
            <DivContainerMark area="dura">
              <ImgLogos alt="mark logo" src={logo7} />
            </DivContainerMark>
          </DivCenterMarks>

          <DivRightFollow>
            <PtextDir>Siguenos en:</PtextDir>
            <DivIconsContainersFlex>
              {FooterInfo.have_facebook && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.facebook)}>
                  <ImgIcons alt="icon" src={face} />
                </DivIconsContainer>
              )}
              {FooterInfo.have_pinterest && (
                <DivIconsContainer
                  onClick={() => GotoURL(FooterInfo.pinterest)}
                >
                  <ImgIcons alt="icon" src={pinter} />
                </DivIconsContainer>
              )}
              {FooterInfo.have_youtube && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.youtube)}>
                  <ImgIcons alt="icon" src={youtube} />
                </DivIconsContainer>
              )}
              {FooterInfo.have_twitter && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.twitter)}>
                  <ImgIcons alt="icon" src={twitter} />
                </DivIconsContainer>
              )}
              {FooterInfo.have_instagram && (
                <DivIconsContainer
                  onClick={() => GotoURL(FooterInfo.instagram)}
                >
                  <ImgIcons alt="icon" src={instagram} />
                </DivIconsContainer>
              )}
              {FooterInfo.have_instagram && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.linkedIn)}>
                  <ImgIcons alt="icon" src={linkedIn} />
                </DivIconsContainer>
              )}
            </DivIconsContainersFlex>
          </DivRightFollow>
        </>
      )}
    </DivFooterContainer>
  );
};

export default Footer;
