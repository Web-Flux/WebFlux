import { GET_REPORT, SET_LOADING, SET_URL } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };

    case GET_REPORT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
