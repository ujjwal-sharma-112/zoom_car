import React from "react";
import {
  Container,
  FoldWrap,
  Heading,
  Store,
  StoreImg,
  SubHeading,
} from "./styles/Apps";

export default function Apps({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Apps.FoldWrap = function AppsFoldWrap({ children, ...restProps }) {
  return <FoldWrap {...restProps}>{children}</FoldWrap>;
};

Apps.Heading = function AppsHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Apps.Store = function AppsStore({ children, ...restProps }) {
  return <Store {...restProps}>{children}</Store>;
};

Apps.StoreImg = function AppsStoreImg({ children, ...restProps }) {
  return <StoreImg {...restProps}>{children}</StoreImg>;
};

Apps.SubHeading = function AppsSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

