import {Alert} from 'react-native';

export const REQUEST = 'try_download';
export const REQUEST_SUCCESS = 'downloaded';
export const REQUEST_FAILURE = 'failed to download';
export const DELETE = 'delete from store';

export default function reducer(state = { data1: [], data2: [] }, action) {
    switch (action.type) {
        case REQUEST:
            return {};
        case REQUEST_SUCCESS:
            return {};
        case DELETE:
            return {};
        case REQUEST_FAILURE:
            return {};
        default:
            return state;
    }
}
