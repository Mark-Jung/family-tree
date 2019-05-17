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
export function thunk_add_relation (
    first,
    last, 
    birth_year,
    death_year,
    is_deceased,
    gender,
    is_step, 
    is_adopted,
    relation,
    related_to,
    notes,
    show_optional,
    birth_date,
    lives_in,
    nickname,
) {
    return (dispatch, getState) => {
        dispatch({ type: ADD_RELATIONS });
        const url = APIConfig.localapiRoot + '/relation';
        return axios.post(url, {
            "user_id":  APIConfig.user_id,
            "first": first, 
            "last": last, 
            "birth_year": birth_year,
            "death_year": death_year,
            "is_deceased": is_deceased,
            "gender": gender,
            "is_step": is_step, 
            "is_adopted": is_adopted,
            "relation": [relation, related_to],
            "notes": notes,
            "birth_date": birth_date,
            "lives_in": lives_in,
            "nickname": nickname,
        })
        .then((response) => {
            dispatch({
                type: ADD_RELATIONS_SUCCESS, 
                payload: response.data.response,
            });
        })
        .catch((error) => {
            dispatch({
                type: ADD_RELATIONS_FAILURE,
                payload: error.response.data.error_message
            });
        });
    }
}