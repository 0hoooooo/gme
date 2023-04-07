import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./Body.css";
const Body = () => {
  const [isShow, setIsShow] = useState(false);
  const [fadeIn, setFadeIn] = useState("");
  const videoRef = useRef(null);
  const handleVideoEnd = () => {
    console.log("video end");
    if (isShow === false) {
      console.log(isShow);
      setFadeIn("fade-In");
      setTimeout(() => {
        setIsShow(!isShow);
      }, 1000);
    }
    setIsShow(true);
  };
  return (
    <div className="ajax-content-wrap">
      <div className="container-wrap" style={{ paddingBottom: 0 }}>
        <div className="container-main-content">
          <div className="container-main-content-row">
            <div
              id="homepage-banner"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                minHeight: "100vh",
                zIndex: 100,
                backgroundSize: "cover",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="row-bg-wrap">
                <div className="inner-wrap">
                  <div className="row-bg"></div>
                </div>
              </div>
              <div
                className="video-color-overlay"
                data-color=""
                style={{ opacity: 0.7 }}
              ></div>
              <div className="mobile-video-image"></div>
              <div
                className="nectar-video-wrap-position-loaded"
                style={{
                  opacity: 1,
                  width: 1540,
                  hegiht: "100%",
                }}
              >
                <div className="nectar-video-inner">
                  <video
                    className="nectar-video-bg"
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    width="1800"
                    height="700"
                    preload="auto"
                    autoPlay={true}
                    muted="muted"
                    playsInline=""
                    style={{
                      width: 1536,
                      height: 860,
                      opacity: 1,
                    }}
                  >
                    <source
                      src="https://www.gmeremit.com/wp-content/uploads/2021/10/web-intro-logo-smaller.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              {/* <NectarVideoWrapper>
                <NectarVideoInner>
                  <video
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    className="nectar-video-bg"
                    width="1300"
                    height="700"
                    preload="auto"
                    autoPlay={true}
                    muted="muted"
                    playsInline=""
                    style={{
                      visibility: "visible",
                      width: 1536,
                      height: 864,
                      opacity: 1,
                    }}
                  >
                    <source
                      src="https://www.gmeremit.com/wp-content/uploads/2021/10/web-intro-logo-smaller.mp4"
                      type="video/mp4"
                    />
                  </video>
                </NectarVideoInner>
              </NectarVideoWrapper> */}
              {isShow ? (
                <div
                  className={"dark_left " + fadeIn}
                  style={{
                    minHeight: "100vh",
                  }}
                >
                  <div className="column_container">
                    <div className="vc_column_inner">
                      <div className="wpb_wrapper">
                        <div id="fws_642d17609587c" className="wpb_row">
                          <div className="row_bg_wrap">
                            <div className="row_bg"></div>
                          </div>
                          <div className="row_col_wrap_left">
                            <div className="extra_padding">
                              <div className="vc_column_inner">
                                <div className="wpb_wrapper"></div>
                              </div>
                            </div>

                            <div
                              className="vc_column_container"
                              style={{
                                opacity: 1,
                                transform: "none",
                              }}
                            >
                              <div className="vc_column_inner">
                                <div className="wpb_wrapper">
                                  <h1
                                    style={{
                                      fontSize: 52,
                                      textAlign: "center",
                                    }}
                                    className="vc_custom_heading"
                                  >
                                    No.1
                                    <br />
                                    Money Transfer Company in South Korea
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div className="extra_padding">
                              <div className="vc_column_inner">
                                <div className="wpb_wrapper"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="fws_642d176097971" className="wpb_row">
                          <div className="row_bg_wrap">
                            <div className="row_bg"></div>
                          </div>
                          <div className="row_col_wrap_left">
                            <div className="vc_col_sm_3">
                              <div className="vc_column_inner">
                                <div className="wpb_wrapper"></div>
                              </div>
                            </div>

                            <div
                              className="vc_col_sm_6"
                              style={{
                                opacity: 1,
                                transform: "none",
                              }}
                            >
                              <div className="vc_column_inner_check">
                                <div className="wpb_wrapper">
                                  <h5
                                    style={{
                                      fontSize: 20,
                                      lineHeight: 1.25,
                                      textAlign: "center",
                                    }}
                                    className="vc_custom_heading"
                                  >
                                    Check the
                                  </h5>
                                  <h3
                                    style={{
                                      fontSize: 35,
                                      color: "#ed1c24",
                                      lineHeight: 1.25,
                                      textAlign: "center",
                                    }}
                                    className="vc_custom_heading"
                                  >
                                    <a href="https://online.gmeremit.com/">
                                      EXCHANGE RATE
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>

                            <div className="vc_col_sm_3">
                              <div className="vc_column_inner">
                                <div className="wpb_wrapper"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="fws_642d176099020" className="wpb_row">
                          <div className="row_bg_wrap">
                            <div className="row_bg"></div>
                          </div>
                          <div className="row_col_wrap_left">
                            <div
                              className="vc_col_sm_12"
                              style={{
                                opacity: 1,
                                transform: "none",
                              }}
                            >
                              <div className="vc_column_inner_right">
                                <div className="wpb_wrapper">
                                  <a
                                    className="register_button"
                                    style={{
                                      marginRight: 15,
                                      marginLeft: 15,
                                      visibility: "visible",
                                    }}
                                    href="https://online.gmeremit.com/register"
                                  >
                                    <span>Register</span>
                                  </a>
                                  <a
                                    className="login_button"
                                    style={{
                                      marginRight: 15,
                                      marginLeft: 15,
                                      visibility: "visible",
                                    }}
                                    href="https://online.gmeremit.com/Login"
                                  >
                                    <span>Login</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* <DarkLeftWrapper>
                <ExtraPadding>
                  <VcColumnInner>
                    <WbpWrapper>
                      <SlogunWrapper>
                        <RowBgWrapper>
                          <RowBg />
                        </RowBgWrapper>
                        <LeftWrapper>
                          <LeftColumnContainer>
                            <VcColumn>
                              <WbpWrapper />
                            </VcColumn>
                          </LeftColumnContainer>
                          <CenterColumnContainer>
                            <CenterVcColumnInner>
                              <CenterWbpWrapper>
                                <CustomHeading>
                                  No.1
                                  <br />
                                  Money Transfer Company in South Korea
                                </CustomHeading>
                              </CenterWbpWrapper>
                            </CenterVcColumnInner>
                          </CenterColumnContainer>
                        </LeftWrapper>
                      </SlogunWrapper>
                      <ExchangeWrapper></ExchangeWrapper>
                      <AccountWrapper></AccountWrapper>
                    </WbpWrapper>
                  </VcColumnInner>
                </ExtraPadding>
              </DarkLeftWrapper> */}
            </div>

            <div
              id="fws_642e6df0e239c"
              data-column-margin="default"
              data-midnight="dark"
              className="send_money_wrapper"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <div className="row_bg_wrap">
                <div className="inner_wrap">
                  <div className="row_bg"></div>
                </div>
              </div>
              <div className="divder_left">
                <div className="diver_left_extra_padding">
                  <div className="vc_column_inner">
                    <div className="wpb_wrapper">
                      <div className="divider_wrap" data-alignment="default">
                        <div
                          style={{
                            height: 90,
                          }}
                          className="divider"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="fws_642e6df0e3820"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
              }}
              className="wpb_row_send_money"
            >
              <div className="row_bg_wrap">
                <div className="inner_wrap">
                  <div className="row_bg"></div>
                </div>
              </div>
              <div className="dark_left_send">
                <div className="extra_padding_send">
                  <div className="vc_column_inner_send">
                    <div className="wpb_wrapper_send">
                      <div id="fws_642e6df0e44fe" className="inner_row_send">
                        <div className="row_bg_wrap_send">
                          <div className="row_bg"></div>
                        </div>
                        <div className="row_inner_left">
                          <div className="extra_padding_content">
                            <div className="vc_column_inner_content">
                              <div className="column_image_wrap">
                                <div className="inner_wrap">
                                  <div className="column_image_bg_loaded"></div>
                                </div>
                              </div>
                              <div className="wpb_wrapper">
                                <h1 className="vc_custom_heading">
                                  Easy &amp; Secure
                                </h1>
                                <div className="content_element">
                                  <div className="wpb_wrapper">
                                    <p>
                                      All-in-one mobile app.
                                      <br />
                                      Government grade security.
                                    </p>
                                  </div>
                                </div>
                                <a className="send_money_button" href="#">
                                  <span>Send money</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="fws_642fd49478e7c" className="wpb_row_send_money">
              <div className="row_bg_wrap">
                <div className="inner_wrap">
                  <div className=" "></div>
                </div>
              </div>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone ">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="divider-wrap height_tablet_60px ">
                        <div
                          style={{
                            height: 90,
                          }}
                          className="divider"
                        ></div>
                      </div>
                      <h1
                        style={{
                          fontSize: 52,
                          textAlign: "center",
                        }}
                        className="vc_custom_heading"
                      >
                        Send money with
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-bottom: 0px;
  margin-top: 0;
  padding-top: 0;
`;
const Content = styled.div`
  margin: 0 auto;
  position: relative;
  @media only screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;
const Row = styled.div`
  display: flex;
  position: relative;
  margin-left: 0;
  margin-right: 0;
`;
const HomepageBanner = styled.div`
  display: flex;
  position: relative;
  padding-top: 0px;
  padding-bottom: 0px;
  min-height: 100vh;
  z-index: 100;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const RowBackGroundWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 0;
`;
const InnerWrapper = styled.div`
  transition: transform 0.95s 0s cubic-bezier(0.3, 0.58, 0.42, 0.9);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
const RowBackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const VideoOverlay = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  padding-bottom: 0;
  z-index: 3;
`;
const VideoImage = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  display: none;
  height: 100%;
  background-image: url(${"https://www.gmeremit.com/wp-content/uploads/2021/08/Landing-Page.png"});
  background-position: center;
  background-repeat: no-repeat;
`;
const NectarVideoWrapper = styled.div`
  position: absolute;
  opacity: 1;
  width: 1536px;
  height: 864px;
  height: 100%;
  margin-left: -50vw;
  left: 50%;
  width: 100vw !important;
`;
const NectarVideoInner = styled.div`
  height: 100%;
`;
const DarkLeftWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  align-content: center;
  flex-wrap: wrap;
  width: auto;
  float: none;
`;
const ExtraPadding = styled.div`
  margin-left: 0;
  align-items: stretch;
  display: flex;
  float: none;
  margin-right: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  @media (min-width: 690px) {
    width: 100%;
  }
`;
const VcColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const WbpWrapper = styled.div`
  min-height: 1px;
`;
const SlogunWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const RowBgWrapper = styled.div`
  margin-left: 0;
  left: 0;
  width: 100%;
`;
const RowBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  -webkit-background-size: cover;
`;
const LeftWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  float: none;
  z-index: 12;
  width: auto;
`;
const LeftColumnContainer = styled.div`
  box-shadow: none;
  float: none;
  margin-right: 0;
  margin-left: 0;
  background-position: center;
`;
const CenterColumnContainer = styled.div`
  opacity: 1;
  transform: none;
`;
const CenterVcColumnInner = styled.div`
  position: relative;
`;
const CenterWbpWrapper = styled.div`
  position: absolute;
  display: flex;
`;
const CustomHeading = styled.h1`
  font-size: 52px;
  text-align: center;
  font-family: Poppins;
  font-size: 36px;
  line-height: 36px;
  font-weight: 600;
`;
const VcColumn = styled.div`
  position: relative;
`;
const ExchangeWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const AccountWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
export default Body;
