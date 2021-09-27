import React from "react";
import {
  Container,
  Opacity,
  PromoImage,
  Logo,
  Heading,
  SubHeading,
  Dashed,
  Features,
  Items,
  Box,
  Button,
  Para,
  Points,
  Title,
} from "./styles/Supermillers";

export default function Supermillers({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Supermillers.PromoImage = function SupermillersPromoImage({
  children,
  ...restProps
}) {
  return <PromoImage {...restProps}>{children}</PromoImage>;
};

Supermillers.Opacity = function SupermillersOpacity({
  children,
  ...restProps
}) {
  return <Opacity {...restProps}>{children}</Opacity>;
};

Supermillers.Logo = function SupermillersLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Supermillers.Heading = function SupermillersHeading({
  children,
  ...restProps
}) {
  return <Heading {...restProps}>{children}</Heading>;
};

Supermillers.SubHeading = function SupermillersSubHeading({
  children,
  ...restProps
}) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Supermillers.Dashed = function SupermillersHeading({ children, ...restProps }) {
  return <Dashed {...restProps}>{children}</Dashed>;
};

// Features

Supermillers.Features = function SupermillersFeatures({
  children,
  ...restProps
}) {
  return <Features {...restProps}>{children}</Features>;
};

Supermillers.Items = function SupermillersItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>;
};

Supermillers.Box = function SupermillersBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Supermillers.Para = function SupermillersPara({ children, ...restProps }) {
  return <Para {...restProps}>{children}</Para>;
};

Supermillers.Points = function SupermillersPoints({ children, ...restProps }) {
  return <Points {...restProps}>{children}</Points>;
};

Supermillers.Title = function SupermillersTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

// Button

Supermillers.Button = function SupermillersButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

