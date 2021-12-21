import * as types from "./data-types";

import workData from "../../assets/fixtures/work.json";
import primaryLinks from "../../assets/fixtures/primary_links.json";
import advantages from "../../assets/fixtures/advantages.json";
import statistics from "../../assets/fixtures/statistics.json";

export const getWork = () => (dispatch) => {
  dispatch({
    type: types.GET_WORK,
    payload: workData,
  });
};

export const getPrimaryLinks = () => (dispatch) => {
  dispatch({
    type: types.GET_PRIMARY_LINKS,
    payload: primaryLinks,
  });
};

export const getAdvantages = () => (dispatch) => {
  dispatch({
    type: types.GET_ADVANTAGES,
    payload: advantages,
  });
};

export const getStatistics = () => (dispatch) => {
  dispatch({
    type: types.GET_STATISTICS,
    payload: statistics,
  });
};
