import React from "react";
import {
  Container,
  Row,
  Logo,
  NavItems,
  NavLinks,
  NavItemContainer,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Row = function HeaderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.NavItems = function HeaderNavItems({ children, ...restProps }) {
  return <NavItems {...restProps}>{children}</NavItems>;
};

Header.NavItemContainer = function HeaderNavItemContainer({
  children,
  ...restProps
}) {
  return <NavItemContainer {...restProps}>{children}</NavItemContainer>;
};

Header.NavLinks = function HeaderNavItems({ children, ...restProps }) {
  return <NavLinks {...restProps}>{children}</NavLinks>;
};
