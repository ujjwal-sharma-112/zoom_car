import React from "react";
import {
  Container,
  IntroWrapper,
  Heading,
  CitySelector,
  CitySelectorSpan,
  SearchBlock,
  Search,
} from "./styles/Intro";

export default function Intro({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Intro.IntroWrapper = function IntroIntroWrapper({ children, ...restProps }) {
  return <IntroWrapper {...restProps}>{children}</IntroWrapper>;
};

Intro.Heading = function IntroHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Intro.CitySelector = function IntroCitySelector({ children, ...restProps }) {
  return <CitySelector {...restProps}>{children}</CitySelector>;
};

Intro.CitySelectorSpan = function IntroCitySelectorSpan({
  children,
  ...restProps
}) {
  return <CitySelectorSpan {...restProps}>{children}</CitySelectorSpan>;
};

Intro.SearchBlock = function IntroSearchBlock({ children, ...restProps }) {
  return <SearchBlock {...restProps}>{children}</SearchBlock>;
}

Intro.Search = function IntroSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
}
