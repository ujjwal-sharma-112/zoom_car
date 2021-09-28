import React from "react";
import {
  Container,
  Heading,
  SubHeading,
  FoldWrap,
  Item,
  ItemHeading,
  ItemSubHeading,
  LazyImg,
  SignUpButton,
} from "./styles/Working";

export default function Working({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Working.Heading = function WorkingHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Working.SubHeading = function WorkingSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Working.FoldWrap = function WorkingFoldWrap({ children, ...restProps }) {
  return <FoldWrap {...restProps}>{children}</FoldWrap>;
};

Working.Item = function WorkingItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Working.ItemHeading = function WorkingItemHeading({ children, ...restProps }) {
  return <ItemHeading {...restProps}>{children}</ItemHeading>;
};

Working.ItemSubHeading = function WorkingItemSubHeading({
  children,
  ...restProps
}) {
  return <ItemSubHeading {...restProps}>{children}</ItemSubHeading>;
};

Working.LazyImg = function WorkingItemHeading({ ...restProps }) {
  return <LazyImg {...restProps} />;
};

Working.SignUpButton = function WorkingSignUpButton({
  children,
  ...restProps
}) {
  return <SignUpButton {...restProps}>{children}</SignUpButton>;
};
