import React from "react";
import { Contact } from "../Components/";
import { FooterWrapper } from "../Components/PrimaryLinks/styles/PrimaryLinks";

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
          <Contact.Icon
            src={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005768/zoomcar_assets/facebook-brands_phi9tj.svg"
            }
            alt=""
          />
          <Contact.Icon
            src={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005768/zoomcar_assets/instagram-brands_o17iaa.svg"
            }
            alt=""
          />
          <Contact.Icon
            src={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005768/zoomcar_assets/twitter-brands_v83zg4.svg"
            }
            alt=""
          />
          <Contact.Icon
            src={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005769/zoomcar_assets/linkedin-in-brands_urj2uu.svg"
            }
            alt=""
          />
          <Contact.Icon
            src={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005768/zoomcar_assets/youtube-brands_lobomt.svg"
            }
            alt=""
          />
        </Contact.Social>
        <Contact.CopyRights>
          © Copyright 2017 Zoomcar India Private Ltd. All rights reserved.
        </Contact.CopyRights>
      </FooterWrapper>
    </Contact>
  );
};

export default ContactContainer;
