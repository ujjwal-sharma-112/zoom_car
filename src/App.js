import React from "react";
import {
  HeaderContainer,
  IntroContainer,
  AdvantagesContainer,
  SupermillersContainer,
  WorkingContainer,
  AppsContainer,
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
    </div>
  );
};

export default App;
