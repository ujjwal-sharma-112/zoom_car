import React from "react";
import {
  HeaderContainer,
  IntroContainer,
  AdvantagesContainer,
  SupermillersContainer,
  WorkingContainer,
  AppsContainer,
  StatisticsContainer,
  PrimaryLinksContainer
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
    </div>
  );
};

export default App;
