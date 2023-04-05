import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./Header.css";

const Header = () => {
  return (
    <div id="header-outer">
      <header id="top">
        <div className="container">
          <div className="row">
            <div className="logo">
              <a id="logo" href="https://www.gmeremit.com">
                <img
                  className="logo"
                  width={180}
                  height={50}
                  src="https://www.gmeremit.com/wp-content/uploads/2021/07/GME-LOGO-HD.png"
                />
              </a>
            </div>
            <div className="menu">
              <div className="widget-area">
                <div></div>
              </div>
              <nav className="menu-nav">
                <ul className="sf-menu">
                  <li id="menu-item1">
                    <a href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">Personal</span>
                    </a>
                  </li>
                  <li id="menu-item2">
                    <a href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">Business</span>
                    </a>
                    <DetailMenuUl>
                      <DetailMenuLi>
                        <DetailMenuA href="https://www.gmeremit.com/business/">
                          <ItemStyleDefault>
                            <ImageLayerOuter>
                              <ImageLayerLoaded />
                              <ColorOverlay />
                            </ImageLayerOuter>
                            <InnerContent>
                              <span>
                                <InnerSpan>B2B</InnerSpan>
                              </span>
                              <span className="menu-item-desc">
                                Reduce Cost on Business Transfers
                              </span>
                            </InnerContent>
                          </ItemStyleDefault>
                        </DetailMenuA>
                      </DetailMenuLi>
                    </DetailMenuUl>
                  </li>
                  <li id="menu-item3">
                    <MenuA href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">Company</span>
                    </MenuA>
                  </li>
                </ul>
              </nav>
            </div>
            <RightContents>
              <MenuNav>
                <MenuUl>
                  <MenuLi>
                    <MenuA href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">Help</span>
                    </MenuA>
                  </MenuLi>
                  <MenuLi>
                    <MenuA href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">Login</span>
                    </MenuA>
                  </MenuLi>
                  <MenuLi>
                    <MenuA href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">English</span>
                    </MenuA>
                  </MenuLi>
                </MenuUl>
              </MenuNav>
            </RightContents>
          </div>
        </div>
      </header>
    </div>
  );
};
const HeaderOuter = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  padding: 30px 0 0 0;
  background-color: #fff;
  z-index: 9999;
  overflow: visible;
`;
const Top = styled.header`
  display: block;
  position: relative;
  z-index: 9998;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  @media only screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;

const Row = styled.div`
  display: flex;
  padding-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  @media only screen and (min-width: 1000px) {
    float: none;
    width: auto;
  }
`;

const Logo = styled.div`
  @media only screen and (min-width: 1000px) {
    display: flex;
    float: none;
    width: auto;
  }
  margin-right: 25px;
`;
const LogoA = styled.a`
  width: auto;
  max-width: none;
  line-height: 22px;
  font-size: 22px;
  letter-spacing: -1px;
  color: #444;
  font-family: "Open Sans";
  font-weight: 600;
  align-self: center;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  float: none;
  width: auto;
  vertical-align: baseline;
`;
const WidgetArea = styled.div`
  display: none;
  z-index: 10000;
`;
const MenuNav = styled.nav`
  display: flex;
  margin: 0px;
  padding: 10px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;
const MenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none outside none;
  vertical-align: middle;
  padding: 0;
  z-index: 10;
  overflow: visible;
  transition: padding 0.8s ease, margin 0.25s ease;
  min-height: 1px;
  line-height: 1px;
c
`;

const MenuLi = styled.li`
  outline: 0 none;
  line-height: 0;
  font-size: 20px;
  align-items: center;
  display: flex;
  float: left;
  list-style: none;
`;

const DetailMenuUl = styled.ul`
  border-radius: 20px;
  list-style: none outside none;
  display: none;
`;
const MenuA = styled.a`
  position: relative;
  text-decoration: none;
  outline: 0 none;
  font-family: "Poppins";
  font-size: 15px;
  line-height: 28px;
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
  color: #191c1f;
  &:hover:after + ${DetailMenuUl} {
    display: block;
    color: red;
    border-bottom: solid 3px #ea2129;
  }
  &:hover {
    color: red;
    border-bottom: solid 3px #ea2129;
  }
  &:hover:after {
    border-bottom: solid 3px #ea2129;
  }
  &:hover + ${DetailMenuUl} {
    display: block;
  }
`;

const DetailMenuLi = styled.li`
  width: 25%;
  flex: none;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;
const DetailMenuA = styled.a`
  padding: 35px !important;
`;

const ItemStyleDefault = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 300px;
  display: flex;
  text-align: left;
`;
const ImageLayerOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: left;
`;
const ImageLayerLoaded = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://www.gmeremit.com/wp-content/uploads/2021/08/digital-design-businessman-trading-online-stock-market-teblet-screen.jpg");
  opacity: 1;
  transition: opacity 0.25s ease 0.1s;
`;
const ColorOverlay = styled.div`
  background: linear-gradient(360deg, transparent, #f6653c);
  opacity: 1;
`;

const InnerContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;
const InnerSpan = styled.span`
  font-family: Poppins;
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
`;
const RightContents = styled.div`
  margin-left: 300px;
  @media only screen and (min-width: 1000px) {
    display: flex;
    float: none;

    width: auto;
  }
`;
export default Header;
