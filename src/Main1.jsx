import { useEffect, useRef, useState } from "react";
import "./Body.css";
const Main1 = () => {
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
  );
};
export default Main1;
