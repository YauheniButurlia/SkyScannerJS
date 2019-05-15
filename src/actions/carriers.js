import {ADD_CARRIER, REQUEST_CARRIERS, SUCCESS_CARRIERS, FAILURE_CARRIERS,DELETE_CARRIERS} from '../constants/actionTypes';
import {CARRIERS_ENDPOINT, REQUEST_OPTIONS} from '../config';

export const request_carriers = () => ({
    type: REQUEST_CARRIERS,
  });
  export const success_carriers = (data) => ({
    type: SUCCESS_CARRIERS,
    data: data,
  });
  export const failure_carriers = (err) => ({
    type: FAILURE_CARRIERS,
    error: err,
  });
  export const delete_carriers = () => ({
    type: DELETE_CARRIERS,
  });

  export const add_carrier = (data) => ({
    type: ADD_CARRIER,
    data: data
  });
  




  export const download_carriers = () => ({
    endpoint: CARRIERS_ENDPOINT,
    options: REQUEST_OPTIONS,
    types: [
      REQUEST_CARRIERS,
      SUCCESS_CARRIERS,
      FAILURE_CARRIERS
    ]
  });