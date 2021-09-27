import React from "react";
import { Header } from "../Components/index";
import logo from "../assets/logo.svg";

const HeaderContainer = () => {
  return (
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
            <Header.NavLinks href="#">ZMS</Header.NavLinks>
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
  );
};

export default HeaderContainer;
