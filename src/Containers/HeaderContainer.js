import React from "react";
import { Header } from "../Components/index";

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Logo src={"https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/logo_slqljw.svg"} alt="" />
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
