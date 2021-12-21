import React from "react";
import { Apps } from "../Components/index";
import bgImg from "../assets/apps-bg.jpg";

const AppsContainer = () => {
  return (
    <Apps bgImg={bgImg}>
      <Apps.FoldWrap>
        <Apps.Heading>Zoom on the go!</Apps.Heading>
        <Apps.SubHeading>
          Make a booking, unlock your car, and end your reservation all from our
          app
        </Apps.SubHeading>
        <Apps.StoreImg
          storeImg={
            "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/google-store_ciqnxe.svg"
          }
          alt=""
        ></Apps.StoreImg>
        <Apps.StoreImg
          storeImg={
            "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/apple-store_ckflx6.svg"
          }
          alt=""
        ></Apps.StoreImg>
      </Apps.FoldWrap>
    </Apps>
  );
};

export default AppsContainer;
