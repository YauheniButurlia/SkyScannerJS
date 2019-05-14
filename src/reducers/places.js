import {REQUEST_PLACES, SUCCESS_PLACES, FAILURE_PLACES, DELETE_PLACES} from '../constants/actionTypes';

export default function places(state = {data: [], error: '', loading: false}, action) {
    switch(action.type){
        case REQUEST_PLACES:
            return {
                ...state, 
                loading: true
            };
        case SUCCESS_PLACES:
            return {
                ...state, 
                data: action.data.Places.map((item) => ({key: item.PlaceName, num: item.PlaceId})),
                loading: false
            };
        case FAILURE_PLACES:
            return {
                ...state, 
                error: action.error, 
                loading: false
            };
        case DELETE_PLACES:
            return {
                data: [], 
                error: '', 
                loading: false
            };
        default:
            return state;
    }
} 

//.map((item) => ({key: item.PlaceName, num: item.PlaceId}))