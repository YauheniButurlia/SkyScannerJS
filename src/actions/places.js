import {REQUEST_PLACES, SUCCESS_PLACES, FAILURE_PLACES, DELETE_PLACES} from '../constants/actionTypes';
import {PLACES_ENDPOINT, REQUEST_OPTIONS} from '../config';

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
  export const delete_places = () => ({
    type: DELETE_PLACES,
  });


  export const download_places = () => ({
    endpoint: PLACES_ENDPOINT,
    options: REQUEST_OPTIONS,
    types: [
      REQUEST_PLACES,
      SUCCESS_PLACES,
      FAILURE_PLACES
    ]
  });