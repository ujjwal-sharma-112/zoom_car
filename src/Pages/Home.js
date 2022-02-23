import * as React from "react";
import {
  HeaderContainer,
  AdvantagesContainer,
  AppsContainer,
  ContactContainer,
  IntroContainer,
  PrimaryLinksContainer,
  StatisticsContainer,
  SupermillersContainer,
  WorkingContainer,
} from "../Containers";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <IntroContainer />
      <AdvantagesContainer />
      <SupermillersContainer />
      <WorkingContainer />
      <AppsContainer />
      <StatisticsContainer />
      <PrimaryLinksContainer />
      <ContactContainer />
    </>
  );
};

export default Home;
