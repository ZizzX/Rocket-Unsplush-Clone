import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Collapse } from "@material-ui/core";
import SearchBlock from "../searchBlock/searchBlock";
import FadeIn from "../fadeIn";

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
      <Collapse
        in={showSearchBlock}
        children={SearchBlock}
        timeout="auto"
        unmountOnExit
      >
        <SearchBlock onSearch={search} searchResults={searchResults} />
      </Collapse>
    </HeaderBlock>
  );
}
