import {GEO_REQUEST, LIMIT_PARAM, OFFSET_PARAM} from '../config';
import {REQUEST_OPTIONS, HEADERS, MAIN_HOST, CARRIERS_REQUEST, PLACES_REQUEST} from '../config';
import { REQUEST_CARRIERS } from '../constants/actionTypes';

const AMOUNT_OF_MARKERS = 200;
const OFFSET = 0;

function callJSON(promise){
  return promise.then(responce => responce.json());
}

function getFetchAction(endpoint, requestOptions){
  if(requestOptions === undefined){
    return callJSON(fetch(endpoint));
  }
  return callJSON(fetch(endpoint, requestOptions));
}


function callAPI(endpoint, requestOptions){
  return Promise.race([
    getFetchAction(endpoint, requestOptions),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Request timeout after 50s.')), 50000);
    })
  ])
}

export const apiMiddleware = store => next => action => {
    const {types, endpoint, options} = action;

    console.log(action.type);

    if(!endpoint && !types && action.type){
        return next(action);
    }

    if (typeof endpoint !== 'string') {
      throw new Error('Specify a string endpoint URL.');
    }
    if(!Array.isArray(types) || types.length !== 3){
        throw new Error('Expected an array of three action types.');
    }
    if(!types.every(type => typeof type === 'string')){
        throw new Error('Expected action types to be strings.');
    }

    const [requestType, successType, failureType] = types;
    next({
        type: requestType,
      });
    
    return callAPI(endpoint, options).then(
      responseJson => {
          console.log(responseJson);
          next({
            type: successType,
            data: responseJson
          })
      },
      error => {
        next({
          type: failureType,
          error: error.message
        })
      }
    );


};
