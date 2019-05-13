//import { REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, DELETE} from '../reducers';

import {REQUEST_CARRIERS, SUCCESS_CARRIERS, FAILURE_CARRIERS,
  REQUEST_PLACES, SUCCESS_PLACES, FAILURE_PLACES,
  REQUEST_MARKERS, SUCCESS_MARKERS, FAILURE_MARKERS,
  DELETE_CARRIERS, DELETE_PLACES, DELETE_MARKERS, 
  CHANGE_TAB} from '../constants/actionTypes';

/*
export const request = (id) => ({
  index: id,
  type: REQUEST,
});

export const del = (id) => ({
  index: id,
  type: DELETE,
});

export const success = (id, info) => ({
  type: REQUEST_SUCCESS,
  index: id,
  data: info,
});

export const failure = (id, err) => ({
  type: REQUEST_FAILURE,
  index: id,
  error: err,
});
*/

/************************************************************************************/

export const request_carriers = () => ({
  type: REQUEST_CARRIERS,
});
export const success_carriers = (data) => ({
  type: SUCCESS_CARRIERS,
  data: data,
});
export const success_carriers = (err) => ({
  type: FAILURE_CARRIERS,
  error: err,
});

export const request_places = () => ({
  type: REQUEST_PLACES,
});
export const success_places = (data) => ({
  type: SUCCESS_PLACES,
  data: data,
});
export const failure_places = (err) => ({
  type: FAILURE_PLACES,
  error: err,
});

export const request_markers = () => ({
  type: REQUEST_MARKERS,
});
export const success_markers = (data) => ({
  type: SUCCESS_MARKERS,
  data: data,
});
export const failure_markers = (err) => ({
  type: FAILURE_MARKERS,
  error: err,
});

export const delete_carriers = () => ({
  type: DELETE_CARRIERS,
});
export const delete_places = () => ({
  type: DELETE_PLACES,
});
export const delete_markers = () => ({
  type: DELETE_MARKERS,
});

export const change_tab = (index) => ({
  type: CHANGE_TAB,
  index: index
});
