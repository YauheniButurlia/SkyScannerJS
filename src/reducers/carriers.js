import {REQUEST_CARRIERS, SUCCESS_CARRIERS, FAILURE_CARRIERS, DELETE_CARRIERS} from '../constants/actionTypes';

export default function carriers(state = {data: [], error: '', loading: false}, action) {
    switch(action.type){
        case REQUEST_CARRIERS:
            return {...state, carriers: {data: [], error: '', loading: true}};
        case SUCCESS_CARRIERS:
            return {...state, carriers: {data: action.data, error: '', loading: false}};
        case FAILURE_CARRIERS:
            return {...state, carriers: {data: [], error: action.error, loading: false}};
        case DELETE_CARRIERS:
            return {...state, carriers: {data: [], error: '', loading: false}};
        default:
            return state;
    }
} 