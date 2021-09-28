import React from "react";
import { Apps } from "../Components/index";
import bgImg from "../assets/apps-bg.jpg";
import googleStore from '../assets/google-store.png';
import appleStore from '../assets/apple-store.png';

const AppsContainer = () => {
  return (
    <Apps bgImg={bgImg}>
      <Apps.FoldWrap>
        <Apps.Heading>Zoom on the go!</Apps.Heading>
        <Apps.SubHeading>
          Make a booking, unlock your car, and end your reservation all from our
          app
        </Apps.SubHeading>
        <Apps.StoreImg storeImg={googleStore}></Apps.StoreImg>
        <Apps.StoreImg storeImg={appleStore}></Apps.StoreImg>
      </Apps.FoldWrap>
    </Apps>
  );
};

export default AppsContainer;
