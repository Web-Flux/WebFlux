import React, { useReducer } from "react";
import client from "../axiosCustomInstance";

import SEOContext from "./SEOContext";
import SEOReducer from "./SEOReducer";
import { GET_REPORT, SET_LOADING, SET_URL } from "../types";

const SEOState = (props) => {
  const initialState = {
    url: null,
    maxScore: null,
    scored: null,
    pages: [],
    site: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(SEOReducer, initialState);

  const setLoading = (value) => {
    dispatch({ type: SET_LOADING, payload: value });
  };

  const setUrl = (url) => {
    dispatch({ type: SET_URL, payload: url });
  };

  const getReport = async (url) => {
    const response = await client.get("/scan", {
      params: {
        site: url,
      },
      headers: {
        "content-type": "text/plain",
      },
    });
    dispatch({ type: GET_REPORT, payload: response.data });
    setLoading(false);
  };

  return (
    <SEOContext.Provider
      value={{
        maxScore: state.maxScore,
        scored: state.scored,
        loading: state.loading,
        pages: state.pages,
        site: state.site,
        getReport,
        setUrl,
      }}
    >
      {props.children}
    </SEOContext.Provider>
  );
};

export default SEOState;
