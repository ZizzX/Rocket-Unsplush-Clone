import React from "react";
import styled from "styled-components";
import './header.css'

import logo from "../../images/ms-icon.png";
import heart from "../../images/heart.png";
import clock from "../../images/clock.png";

const HeaderBlock = styled.header`
  width: 100%;
  min-height: 270px;
  background: #000000;
  color: #ffffff;
  padding: 90px 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1510px;
  @media (min-width: 992px) and (max-width: 1199px) {
    width: ;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderBlock>
      <Container>
        <Row>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <Row>
              <div className='header-top__link'>
                <img src={heart} alt="heart" />
                <span>Избранное</span>
              </div>
              <div className='header-top__link' >
                <img src={clock} alt="clock" />
                <span>История поиска</span>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </HeaderBlock>
  );
}
