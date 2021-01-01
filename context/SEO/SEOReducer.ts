import { GET_REPORT, SET_LOADING, SET_URL } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };

    case GET_REPORT:
      const { max_score, pages, scored, site } = action.payload;
      return {
        ...state,
        maxScore: max_score,
        pages,
        scored,
        site,
      };
    default:
      return state;
  }
};

export default reducer;
