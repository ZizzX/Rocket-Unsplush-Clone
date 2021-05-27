import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container} from 'react-bootstrap';
import SearchBlock from '../searchBlock/searchBlock';

import { Flex } from '../flex'

import logo from "../../images/ms-icon.png";

const HeaderBlock = styled.header`
  width: 100%;
  min-height: 270px;
  background: #000000;
  color: #ffffff;
  padding: 90px 20px;
`;

const LogoBlock = styled(Flex)`
  cursor: pointer;
  & > span {
    margin: 0 0 0 24px;
    font-size: 24px;
  }
`

// const Container = styled.div`
//   margin: 0 auto;
//   max-width: 1510px;
//   @media (min-width: 992px) and (max-width: 1199px) {
//     max-width: 970px;
//   }
// `;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
  &:not(:first-of-type) {
    margin: 0 0 0 22px;
  };
  & > span {
    margin: 0 0 0 10px;
    font-size: 18px;
  }
`


export default function Header(props) {
  const {search} = props;
  return (
    <HeaderBlock>
      <Container>
        <Flex justify='space-between'>
          <LogoBlock align='center'>
            <img src={logo} alt="logo" />
            <span>ImageStock</span>
          </LogoBlock>
          <div>
          <nav>
          <Flex>
              <HeaderItem>
                  <FontAwesomeIcon icon="heart" size='1x' />
                  <span>Избранное</span>
              </HeaderItem>
              <HeaderItem>
                  <FontAwesomeIcon icon="history" size='1x' />
                  <span>История поиска</span>
              </HeaderItem>
            </Flex>
          </nav>
          </div>
        </Flex>
        <SearchBlock onSearch={search} />
      </Container>
    </HeaderBlock>
  );
}
