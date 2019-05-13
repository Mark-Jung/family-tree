import _ from 'lodash';
import axios from 'axios';

import APIConfig from '../constants/api';


//action types
//export const LOAD_RELATIONS = 'familytree/relations/LOAD_RELATIONS';

const INITIAL_STATE = {
    error_message: "hi",
};


// reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}


// action creators
export function thunk_load_relation () {
    return (dispatch, getState) => {
        dispatch({ type: LOAD_RELATIONS });
        const url = APIConfig.localapiRoot + '/relation/2';
        return axios.get(url)
        .then((response) => {
            dispatch({
                type: LOAD_RELATIONS_SUCCESS, 
                payload: response.data.response,
            });
        })
        .catch((error) => {
            dispatch({
                type: LOAD_RELATIONS_FAILURE,
                payload: error.response.data.error_message
            });
        });
    }
}