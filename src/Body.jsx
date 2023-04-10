import styled from "styled-components";
import "./Body.css";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
const Body = () => {
  return (
    <div className="ajax-content-wrap">
      <div className="container-wrap" style={{ paddingBottom: 0 }}>
        <div className="container-main-content">
          <div className="container-main-content-row">
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
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
