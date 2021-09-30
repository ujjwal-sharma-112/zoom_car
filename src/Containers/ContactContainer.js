import React from "react";
import { Contact } from "../Components/";
import { FooterWrapper } from "../Components/PrimaryLinks/styles/PrimaryLinks";
import facebook from "../assets/icons/facebook-brands.svg";
import twitter from "../assets/icons/twitter-brands.svg";
import youtube from "../assets/icons/youtube-brands.svg";
import linkedIn from "../assets/icons/linkedin-in-brands.svg";
import instagram from "../assets/icons/instagram-brands.svg";

const ContactContainer = () => {
  return (
    <Contact>
      <FooterWrapper style={{ flexDirection: "column" }}>
        <Contact.Title>Let's Keep in Touch</Contact.Title>
        <Contact.Address>
          7th Floor, Tower-B, Diamond District, 150, HAL Airport Road,
          Kodihalli, Bangalore – 560008
        </Contact.Address>
        <Contact.Social>
          <Contact.Icon src={facebook} />
          <Contact.Icon src={instagram} />
          <Contact.Icon src={twitter} />
          <Contact.Icon src={linkedIn} />
          <Contact.Icon src={youtube} />
        </Contact.Social>
        <Contact.CopyRights>
          © Copyright 2017 Zoomcar India Private Ltd. All rights reserved.
        </Contact.CopyRights>
      </FooterWrapper>
    </Contact>
  );
};

export default ContactContainer;
