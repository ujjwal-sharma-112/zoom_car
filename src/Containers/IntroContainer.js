import React from "react";
import { Intro } from "../Components/index";

const IntroContainer = () => {
  return (
    <Intro img={"https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/intro-bg_ogji4u.jpg"} alt="">
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
