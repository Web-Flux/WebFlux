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
    page: [],
    site: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(SEOReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setUrl = (url) => {
    dispatch({ type: SET_URL, payload: url });
  };

  const getReport = async (url) => {
    console.log("URL" + url);
    setLoading();
    const response = await client.get("/scan", {
      params: {
        site: url,
      },
      headers: {
        'content-type': 'text/plain'
      }
    });
    console.log(response);
    dispatch({ type: GET_REPORT, payload: response.data });
  };

  return (
    <SEOContext.Provider
      value={{
        maxScore: state.maxScore,
        scored: state.scored,
        loading: state.loading,
        page: state.page,
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
