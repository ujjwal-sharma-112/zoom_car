import React from "react";
import { Header } from "../Components/index";
import logo from "../logo.svg";

const HeaderContainer = () => {
  return (
    <div>
      <Header>
        <Header.Logo src={logo} />
        <Header.Row>
          <Header.NavItems>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">OFFERS</Header.NavLinks>
            </Header.NavItemContainer>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">SUBSCRIPTIONS</Header.NavLinks>
            </Header.NavItemContainer>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">AMIGO</Header.NavLinks>
            </Header.NavItemContainer>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">MOBILE APP</Header.NavLinks>
            </Header.NavItemContainer>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">SIGNUP</Header.NavLinks>
            </Header.NavItemContainer>
            <Header.NavItemContainer>
              <Header.NavLinks href="#">LOGIN</Header.NavLinks>
            </Header.NavItemContainer>
          </Header.NavItems>
        </Header.Row>
      </Header>
    </div>
  );
};

export default HeaderContainer;
