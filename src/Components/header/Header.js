import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Collapse } from "@material-ui/core";
import SearchBlock from "../searchBlock/searchBlock";
// import FadeIn from "../fadeIn";

import { Flex } from "../flex";

import logo from "../../images/ms-icon.png";

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  background: #000000;
  color: #ffffff;
  padding: 25px 20px;
`;

const LogoBlock = styled(Flex)`
  cursor: pointer;
  font-family: "Conv_SF UI Display", sans-serif;
  & > span {
    margin: 0 0 0 24px;
    font-size: 24px;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
  &:not(:first-of-type) {
    margin: 0 0 0 22px;
  }
  & > span {
    margin: 0 0 0 10px;
    font-size: 18px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0;
      width: 0px;
      height: 0px;
      background-color: #ffffff;
      transition: width 0.1s ease-in-out 0.1s, height 0.1s ease-in-out;
    }
  }
  &:hover > span:after {
    width: 30px;
    height: 3px;
  }
`;

export default function Header(props) {
  const { search, searchResults } = props;
  const [showSearchBlock, setShowSearchBlock] = useState(true);

  return (
    <HeaderBlock>
      <Container>
        <Flex justify="space-between">
          <LogoBlock align="center">
            <img src={logo} alt="logo" />
            <span>ImageStock</span>
          </LogoBlock>
          <div>
            <nav>
              <Flex>
                <Collapse in={!showSearchBlock} timeout="auto" unmountOnExit>
                  <HeaderItem>
                    <FontAwesomeIcon icon="search" size="1x" />
                    <span>Поиск</span>
                  </HeaderItem>
                </Collapse>
                <HeaderItem>
                  <FontAwesomeIcon icon="heart" size="1x" />
                  <span>Избранное</span>
                </HeaderItem>
                <HeaderItem>
                  <FontAwesomeIcon icon="history" size="1x" />
                  <span>История поиска</span>
                </HeaderItem>
              </Flex>
            </nav>
          </div>
        </Flex>
      </Container>
      <Collapse in={showSearchBlock} timeout="auto" unmountOnExit>
        <SearchBlock onSearch={search} searchResults={searchResults} />
      </Collapse>
    </HeaderBlock>
  );
}
