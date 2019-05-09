import _ from 'lodash';
import axios from 'axios';

import APIConfig from '../constants/api';


//action types
export const LOAD_RELATIONS = "familytree/relations/LOAD_RELATIONS";
export const LOAD_RELATIONS_SUCCESS = "familytree/relations/LOAD_RELATIONS_SUCCESS";
export const LOAD_RELATIONS_FAILURE = "familytree/relations/LOAD_RELATIONS_FAILURE";


//export const LOAD_RELATIONS = 'familytree/relations/LOAD_RELATIONS';

const INITIAL_STATE = {
    error_message: "hi",
    all_relations: [{"id": 1, 
                    "first": "Amy", 
                    "last": "Yang", 
                    "relation": "self"},
                {
                    "id": 2, 
                    "first": "Lexi", 
                    "last": "Ryan", 
                    "relation": "Mother"
                }],
};


// reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_RELATIONS: 
            return state;
        case LOAD_RELATIONS_FAILURE:
            return {
                ...state, 
                error_message: "load failed",
            }
        case LOAD_RELATIONS_SUCCESS: 
            console.log(action.payload);
            return {
                ...state, 
                error_message: "", 
                all_relations: action.payload, 
            }
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