import * as types from "./data-types";

const INITIAL_STATE = {
  work: [],
  primaryLinks: [],
  advantages: [],
  statistics: [],
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_WORK:
      return {
        ...state,
        work: action.payload,
      };
    case types.GET_PRIMARY_LINKS:
      return {
        ...state,
        primaryLinks: action.payload,
      };
    case types.GET_ADVANTAGES:
      return {
        ...state,
        advantages: action.payload,
      };
    case types.GET_STATISTICS:
      return {
        ...state,
        statistics: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
