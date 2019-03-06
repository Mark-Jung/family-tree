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
