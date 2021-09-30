import React from "react";
import {
  Address,
  Container,
  CopyRights,
  Icon,
  Social,
  Title,
} from "./styles/Contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.Address = function ContactAddress({ children, ...restProps }) {
  return <Address {...restProps}>{children}</Address>;
};

Contact.Social = function ContactSocial({ children, ...restProps }) {
  return <Social {...restProps}>{children}</Social>;
};

Contact.Icon = function ContactIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Contact.CopyRights = function ContactCopyRights({ children, ...restProps }) {
  return <CopyRights {...restProps}>{children}</CopyRights>;
};
