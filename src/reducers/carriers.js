import {REQUEST_CARRIERS, SUCCESS_CARRIERS, FAILURE_CARRIERS, DELETE_CARRIERS} from '../constants/actionTypes';

export default function carriers(state = {data: [], error: '', loading: false}, action) {
    switch(action.type){
        case REQUEST_CARRIERS:
            return {
                ...state, 
                loading: true
            };
        case SUCCESS_CARRIERS:
            return {
                ...state, 
                data: action.data.Carriers.map((item) => ({key: item.Name, num: item.CarrierId})), 
                loading: false
            };
        case FAILURE_CARRIERS:
            return {
                ...state, 
                error: action.error, 
                loading: false
            };
        case DELETE_CARRIERS:
            return {
                data: [], 
                error: '', 
                loading: false
            };
        default:
            return state;
    }
} 

//map((item) => ({key: item.Name, num: item.CarrierId}))