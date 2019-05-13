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
