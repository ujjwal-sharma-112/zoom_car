import React from "react";
import {
  Container,
  Heading,
  SubHeading,
  AdvantagesItems,
  AdvantageItem,
  Image,
  AdvantageItemHeading,
  AdvantageItemSubHeading,
} from "./styles/Advantages";

export default function Advantages({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Advantages.Heading = function AdvantagesHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Advantages.Subheading = function AdvantagesSubHeading({
  children,
  ...restProps
}) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Advantages.AdvantagesItems = function AdvantagesAdvantagesItems({
  children,
  ...restProps
}) {
  return <AdvantagesItems {...restProps}>{children}</AdvantagesItems>;
};

Advantages.AdvantageItem = function AdvantagesAdvantageItem({
  children,
  ...restProps
}) {
  return <AdvantageItem {...restProps}>{children}</AdvantageItem>;
};

Advantages.Image = function AdvantagesImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Advantages.AdvantageItemHeading = function AdvantagesAdvantageItemHeading({
  children,
  ...restProps
}) {
  return <AdvantageItemHeading {...restProps}>{children}</AdvantageItemHeading>;
};

Advantages.AdvantageItemSubHeading =
  function AdvantagesAdvantageItemSubHeading({ children, ...restProps }) {
    return (
      <AdvantageItemSubHeading {...restProps}>
        {children}
      </AdvantageItemSubHeading>
    );
  };
