import React from "react";
import {
  Container,
  FoldWrap,
  LazyImg,
  StatItem,
  Stats,
  Title,
} from "./styles/Statistics";

export default function Statistics({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Statistics.FoldWrap = function StatisticsFoldWrap({ children, ...restProps }) {
  return <FoldWrap {...restProps}>{children}</FoldWrap>;
};

Statistics.StatItem = function StatisticsStatItem({ children, ...restProps }) {
  return <StatItem {...restProps}>{children}</StatItem>;
};

Statistics.LazyImg = function StatisticsFoldWrap({ ...restProps }) {
  return <LazyImg {...restProps} />;
};

Statistics.Stats = function StatisticsStats({ children, ...restProps }) {
  return <Stats {...restProps}>{children}</Stats>;
};

Statistics.Title = function StatisticsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

