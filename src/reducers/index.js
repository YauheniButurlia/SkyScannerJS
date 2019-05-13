/*
export const REQUEST = 'try_download';
export const REQUEST_SUCCESS = 'downloaded';
export const REQUEST_FAILURE = 'failed to download';
export const DELETE = 'delete from store';
*/
import {combineReducers} from 'redux';
import carriers from './carriers';
import markers from './markers';
import places from './places';
import nav from './nav';

export default combineReducers({
  carriers,
  places,
  markers,
  selectedTabIndex: nav
});

/*
export default function reducer(state, action) {
    switch (action.type) {
        case REQUEST: {
               if(action.index === 0) {
                 return {...state, loading1: true};
               } else if(action.index === 1) {
                 return {...state, loading2: true};
               } else if(action.index === 2) {
                 return {...state, loading3: true};
               }
             }
        case REQUEST_SUCCESS: {
               if(action.index === 0) {
                 return {...state, data1: action.data, loading1: false, error1: null};
               } else if(action.index === 1) {
                 return {...state, data2: action.data, loading2: false, error2: null};
               } else if(action.index === 2) {
                 return {...state, data3: [...state.data3,...action.data], loading3: false, error3: null};
               }
             }
        case DELETE: {
               if(action.index === 0) {
                 return {...state, data1: []};
               } else if(action.index === 1) {
                 return {...state, data2: []};
               } else if(action.index === 2) {
                 return {...state, data3: []};
               }
             }
        case REQUEST_FAILURE: {
               if(action.index === 0) {
                 console.warn(action.error);
                 return {...state, error1: action.error, loading1: false};
               } else if(action.index === 1) {
                console.warn(action.error);
                 return {...state, error2: action.error, loading2: false};
               } else if(action.index === 2) {
                  console.warn(action.error);
                  return {...state, error3: action.error, loading3: false};
               }
             }
        default:
            return state;
    }
}
*/
