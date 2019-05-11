import {REQUEST_CARRIERS, SUCCESS_CARRIERS, FAILURE_CARRIERS, DELETE_CARRIERS} from '../constants/actionTypes';

export default function carriers(state, action) {
    switch(action.type){
        case REQUEST_CARRIERS:
        case SUCCESS_CARRIERS:
        case FAILURE_CARRIERS:
        case DELETE_CARRIERS:
        default:
            return state;
    }
} 