import {REQUEST_PLACES, SUCCESS_PLACES, FAILURE_PLACES, DELETE_PLACES} from '../constants/actionTypes';

export default function places(state, action) {
    switch(action.type){
        case REQUEST_PLACES:
            return {...state, places: {data: [], error: '', loading: true}};
        case SUCCESS_PLACES:
            return {...state, places: {data: action.data, error: '', loading: false}};
        case FAILURE_PLACES:
            return {...state, places: {data: [], error: action.error, loading: false}};
        case DELETE_PLACES:
            return {...state, places: {data: [], error: '', loading: false}};
        default:
            return state;
    }
} 