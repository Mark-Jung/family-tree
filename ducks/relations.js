import _ from 'lodash';
import axios from 'axios';

import APIConfig from '../constants/api';


//action types
export const LOAD_RELATIONS = "familytree/relations/LOAD_RELATIONS";
export const LOAD_RELATIONS_SUCCESS = "familytree/relations/LOAD_RELATIONS_SUCCESS";
export const LOAD_RELATIONS_FAILURE = "familytree/relations/LOAD_RELATIONS_FAILURE";

export const LOAD_DETAILS = "familytree/relations/LOAD_DETAILS";
export const LOAD_DETAILS_SUCCESS = "familytree/relations/LOAD_DETAILS_SUCCESS";
export const LOAD_DETAILS_FAILURE = "familytree/relations/LOAD_DETAILS_FAILURE";

export const ADD_RELATIONS = "familytree/relations/ADD_RELATIONS";
export const ADD_RELATIONS_SUCCESS = "familytree/relations/ADD_RELATIONS_SUCCESS";
export const ADD_RELATIONS_FAILURE = "familytree/relations/ADD_RELATIONS_FAILURE";


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
    detail_id: 0,
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
            //console.log(action.payload);
            return {
                ...state, 
                error_message: "", 
                all_relations: action.payload, 
            }
        case LOAD_DETAILS: 
            return state;
        case LOAD_DETAILS_FAILURE:
            return {
                ...state, 
                error_message: "load failed",
            }
        case LOAD_DETAILS_SUCCESS: 
            console.log(action.payload);
            return {
                ...state, 
                error_message: "", 
                all_details: action.payload, 
            }
        case ADD_RELATIONS: 
            return state;
        case ADD_RELATIONS_FAILURE:
            return {
                ...state, 
                error_message: "add failed",
            }
        case ADD_RELATIONS_SUCCESS: 
            console.log(action.payload);
            return {
                ...state, 
                error_message: "",             }
        default: 
            return state;
    }
}


// action creators
export function thunk_load_relation () {
    return (dispatch, getState) => {
        dispatch({ type: LOAD_RELATIONS });
        const url = APIConfig.localapiRoot + '/relations/' + APIConfig.user_id;
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






// action creators
export function thunk_load_details (relation_id) {
    return (dispatch, getState) => {
        dispatch({ type: LOAD_DETAILS });
        const url = APIConfig.localapiRoot + '/relation/' + relation_id;
        return axios.get(url)
        .then((response) => {
            dispatch({
                type: LOAD_DETAILS_SUCCESS, 
                payload: response.data.response,
            });
        })
        .catch((error) => {
            dispatch({
                type: LOAD_DETAILS_FAILURE,
                payload: error.response.data.error_message
            });
        });
    }
}

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
               //type: LOAD_RELATIONS,

                // const url = APIConfig.localapiRoot + '/relations/' + APIConfig.user_id;
                // return axios.get(url)
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

// export function add_relations_success() {
//     return dispatch({
//         type: ADD_RELATIONS_SUCCESS, 
//         payload: response.data.response,
//     });
// }

// export function load_relations() {
//     return dispatch({
//         type: LOAD_RELATIONS,
//         payload: response.data.response,  // ???
//     });
// }

export function add_relations_load_relations(
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
    birth_date,
    lives_in,
    nickname,
) {
    return (dispatch, getState) => {
        return dispatch(thunk_add_relation(
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
            birth_date,
            lives_in,
            nickname,
        )).then(() => {
            return dispatch(thunk_load_relation());
        });
    };
};