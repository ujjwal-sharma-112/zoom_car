import React from "react";
import { Statistics } from "../Components/index";
import statData from "../assets/fixtures/statistics.json";

const StatisticsContainer = () => {
  return (
    <Statistics>
      <Statistics.FoldWrap>
        {statData.map((item, index) => (
          <Statistics.StatItem key={index}>
            <Statistics.LazyImg src={item.image} key={item.id} />
            <Statistics.Stats>{item.stat}</Statistics.Stats>
            <Statistics.Title>{item.title}</Statistics.Title>
          </Statistics.StatItem>
        ))}
      </Statistics.FoldWrap>
    </Statistics>
  );
};

export default StatisticsContainer;
