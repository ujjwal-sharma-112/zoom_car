import React from "react";
import { Advantages } from "../Components";
import advantagesData from "../assets/fixtures/advantages.json";

const AdvantagesContainer = () => {
  return (
    <Advantages>
      <Advantages.Heading>THE ZOOMCAR ADVANTAGE</Advantages.Heading>
      <Advantages.Subheading>
        We simplified car rentals, so you can focus on what's important to you.
      </Advantages.Subheading>
      <Advantages.AdvantagesItems>
        {advantagesData.map((item, index) => (
          <Advantages.AdvantageItem key={index}>
            <Advantages.Image img={item.image} />
            <Advantages.AdvantageItemHeading>
              {item.title}
            </Advantages.AdvantageItemHeading>
            <Advantages.AdvantageItemSubHeading>
              {item.subTitle}
            </Advantages.AdvantageItemSubHeading>
          </Advantages.AdvantageItem>
        ))}
      </Advantages.AdvantagesItems>
    </Advantages>
  );
};

export default AdvantagesContainer;
