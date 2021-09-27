import React from "react";
import { Intro } from "../Components/index";
import bgImage from "../assets/intro-bg.jpg";

const IntroContainer = () => {
  return (
    <Intro img={bgImage}>
      <Intro.IntroWrapper>
        <Intro.Heading>DRIVE IN SANITISED ZOOMCAR</Intro.Heading>
        <Intro.CitySelector>
          SELF DRIVE CAR RENTAL
          <Intro.CitySelectorSpan>DELHI NCR</Intro.CitySelectorSpan>
        </Intro.CitySelector>
        <Intro.SearchBlock>
          <Intro.Search>
            Start Your Wonderful Journey
          </Intro.Search>
        </Intro.SearchBlock>
      </Intro.IntroWrapper>
    </Intro>
  );
};

export default IntroContainer;
