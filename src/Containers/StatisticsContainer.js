import React from "react";
import { Statistics } from "../Components/index";
import statData from "../assets/fixtures/statistics.json";

const StatisticsContainer = () => {
  return (
    <Statistics>
      <Statistics.FoldWrap>
        {statData.map((item) => (
          <Statistics.StatItem>
            <Statistics.LazyImg src={item.image} />
            <Statistics.Stats>{item.stat}</Statistics.Stats>
            <Statistics.Title>{item.title}</Statistics.Title>
          </Statistics.StatItem>
        ))}
      </Statistics.FoldWrap>
    </Statistics>
  );
};

export default StatisticsContainer;
