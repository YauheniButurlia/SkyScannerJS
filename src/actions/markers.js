import {REQUEST_MARKERS, SUCCESS_MARKERS, FAILURE_MARKERS, DELETE_MARKERS} from '../constants/actionTypes';

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
  export const delete_markers = () => ({
    type: DELETE_MARKERS,
  });