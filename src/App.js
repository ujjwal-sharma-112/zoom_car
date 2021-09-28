import React from "react";
import {
  HeaderContainer,
  IntroContainer,
  AdvantagesContainer,
  SupermillersContainer,
  WorkingContainer,
  AppsContainer,
  StatisticsContainer
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
    </div>
  );
};

export default App;
