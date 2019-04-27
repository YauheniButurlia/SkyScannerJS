import {Alert} from 'react-native';

export const REQUEST = 'try_download';
export const REQUEST_SUCCESS = 'downloaded';
export const REQUEST_FAILURE = 'failed to download';
export const DELETE = 'delete from store';

export default function reducer(state = { data1: [], data2: [], loading1: false, loading2: false, error1: '', error2: '' }, action) {
    switch (action.type) {
        case REQUEST:{
               if(action.index === 1) {
                 return {...state, loading1: true);
               } else {
                 return {...state, loading2: true);
               }
             }
        case REQUEST_SUCCESS: {
               if(action.index === 1) {
                 return {...state, data1: action.data, loading1: false};
               } else {
                 return {...state, data2: action.data, loading2: false};
               }
             }
        case DELETE: {
               if(action.index === 1) {
                 return {...state, data1: []};
               } else {
                 return {...state, data2: []};
               }
             }
        case REQUEST_FAILURE: {
               if(action.index === 1) {
                 return {...state, error1: action.error, loading1: false};
               } else {
                 return {...state, error2: action.error, loading2: false};
               }
             }
        default:
            return state;
    }
}
