import React, { useEffect } from "react";
import { Statistics } from "../Components/index";
import { connect } from "react-redux";
import { getStatistics } from "../redux/data/data-action";

const StatisticsContainer = ({ statData, setStatistic }) => {
  useEffect(() => {
    setStatistic();
  }, [setStatistic]);

  return (
    <Statistics>
      <Statistics.FoldWrap>
        {statData.map((item) => (
          <Statistics.StatItem key={item.id}>
            <Statistics.LazyImg src={item.image} alt="" key={item.id} />
            <Statistics.Stats>{item.stat}</Statistics.Stats>
            <Statistics.Title>{item.title}</Statistics.Title>
          </Statistics.StatItem>
        ))}
      </Statistics.FoldWrap>
    </Statistics>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatistic: () => dispatch(getStatistics()),
  };
};

const mapStateToProps = (state) => {
  return {
    statData: state.data.statistics,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsContainer);
