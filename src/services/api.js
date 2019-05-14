import {GEO_REQUEST, LIMIT_PARAM, OFFSET_PARAM} from '../config';
import {REQUEST_OPTIONS, HEADERS, MAIN_HOST, CARRIERS_REQUEST, PLACES_REQUEST} from '../config';

const AMOUNT_OF_MARKERS = 200;
const OFFSET = 0;

export function fetchMarkers(){
  return callJSON(fetch(makeGeoRequestString(AMOUNT_OF_MARKERS, OFFSET)));
}
export function fetchCarriers(){
  return callJSON(fetch(...makeSkyScannerRequest(CARRIERS_REQUEST)));
}
export function fetchPlaces(){
  return callJSON(fetch(...makeSkyScannerRequest(PLACES_REQUEST)));
}

function makeGeoRequestString(limit, offset){
  return GEO_REQUEST + '?' + LIMIT_PARAM + limit + '&' + OFFSET_PARAM + offset;
}
function makeSkyScannerRequest(request){
  return ['https://' + MAIN_HOST + request, REQUEST_OPTIONS];
}

function callJSON(promise){
  return promise.then(responce => responce.json());
}

export const apiMiddleware = store => next => action => {
    console.log(action);
    const index = action.index;
    const types = action.types;
    console.log(types);
    
    if(!types && action.type){
        return next(action);
    }

    if(!Array.isArray(types) || types.length !== 3){
        throw new Error('Expected an array of three action types.');
    }
    if(!types.every(type => typeof type === 'string')){
        throw new Error('Expected action types to be strings.');
    }
    const {requestType, successType, failureType} = types;
    next({
        index: index,
        type: requestType,
      });
};
/*
    _fetchGeo(){
      return new Promise(resolve => {
        setTimeout(() => resolve('resolved'), 200);
      })
    }
*/

/*
    _repeatedCall = () => {
      this._fetchGeo()
      .then(() => {
        this._fetchMarkers();
        if(loadedAmount < neededAmount) {
          this._repeatedCall();
        }
      });
    }
*/