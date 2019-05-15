import {REQUEST_MARKERS, SUCCESS_MARKERS, FAILURE_MARKERS, DELETE_MARKERS} from '../constants/actionTypes';

export default function markers(state = {data: [], error: '', loading: false}, action) {
    switch(action.type){
        case REQUEST_MARKERS:
            return {
                ...state, 
                loading: true
            };
        case SUCCESS_MARKERS:
            return {
                ...state, 
                data: action.data.map((item) => (
                    {
                        key: item.asset_id,
                        title: item.map_label,
                        desc: item.tma_asset_name,
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude)
                    })), 
                loading: false
            };
        case FAILURE_MARKERS:
            return {
                ...state, 
                error: action.error, 
                loading: false
            };
        case DELETE_MARKERS:
            return {
                data: [], 
                error: '', 
                loading: false
            };
        default:
            return state;
    }
} 