import {REQUEST_MARKERS, SUCCESS_MARKERS, FAILURE_MARKERS, DELETE_MARKERS} from '../constants/actionTypes';

export default function markers(state, action) {
    switch(action.type){
        case REQUEST_MARKERS:
        case SUCCESS_MARKERS:
        case FAILURE_MARKERS:
        case DELETE_MARKERS:
        default:
            return state;
    }
} 