import React from "react";
import {
  HeaderContainer,
  IntroContainer,
  AdvantagesContainer,
  SupermillersContainer,
  WorkingContainer,
  AppsContainer,
  StatisticsContainer,
  PrimaryLinksContainer,
  ContactContainer,
} from "./Containers/index";
import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <IntroContainer />
      <AdvantagesContainer />
      <SupermillersContainer />
      <WorkingContainer />
      <AppsContainer />
      <StatisticsContainer />
      <PrimaryLinksContainer />
      <ContactContainer />
    </div>
  );
};

export default App;
