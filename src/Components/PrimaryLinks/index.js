import React from "react";
import {
  Container,
  FooterWrapper,
  LazyImg,
  Links,
  Title,
} from "./styles/PrimaryLinks";

export default function PrimaryLinks({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PrimaryLinks.FooterWrapper = function PrimaryLinksFooterWrapper({
  children,
  ...restProps
}) {
  return <FooterWrapper {...restProps}>{children}</FooterWrapper>;
};

PrimaryLinks.Links = function PrimaryLinksLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

PrimaryLinks.LazyImg = function PrimaryLinksLazyImg({ ...restProps }) {
  return <LazyImg {...restProps} />;
};

PrimaryLinks.Title = function PrimaryLinksTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
