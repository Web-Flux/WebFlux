import React, { useReducer } from 'react';
import axios from  'axios';

import SEOContext from './SEOContext';
import SEOReducer from './SEOReducer';
import {
    GET_REPORT,
    SET_LOADING,
    SET_URL,
} from '../types';


const SEOState = (props) => {
    const initialState = {
        url: null,
        maxScore: null,
        scored: null,
        page: [],
        site:  {},
        loading: false
    };

    const [state,  dispatch] = useReducer(SEOReducer, initialState);

    const setLoading =  () => {
        dispatch({ type: SET_LOADING });
    }

    const setUrl = (url) => {
        dispatch({type: SET_URL, payload: url});
    }

    const getReport = async (url)  => {
        setLoading();
        const res = await axios({
            method: 'get',
            url: '/scan',
            data: {
                site: url
            }
        })

        dispatch({ type: GET_REPORT, payload: res.data})
    }

    return(
        <SEOContext.Provider value = {{
            maxScore: state.maxScore,
            scored:  state.scored,
            loading: state.loading,
            page: state.page,
            site: state.site,
            getReport,
            setUrl
        }}>
        {props.children}
        </SEOContext.Provider>
    )
}

export default SEOState;