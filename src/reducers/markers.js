import {REQUEST_MARKERS, SUCCESS_MARKERS, FAILURE_MARKERS, DELETE_MARKERS} from '../constants/actionTypes';

export default function markers(state, action) {
    switch(action.type){
        case REQUEST_MARKERS:
            return {...state, markers: {data: [], error: '', loading: true}};
        case SUCCESS_MARKERS:
            return {...state, markers: {data: action.data, error: '', loading: false}};
        case FAILURE_MARKERS:
            return {...state, markers: {data: [], error: action.error, loading: false}};
        case DELETE_MARKERS:
            return {...state, markers: {data: [], error: '', loading: false}};
        default:
            return state;
    }
} 