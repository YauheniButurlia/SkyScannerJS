export const API_KEY = 'a45c7b6a8emshf8d62bbc6343fccp1b13dfjsn6bb5515281c4';
export const MAIN_HOST = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

export const CARRIERS_REQUEST = '/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-07-01?inboundpartialdate=2019-09-01';
export const PLACES_REQUEST = '/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm';
export const GEO_REQUEST = 'https://data.sfgov.org/resource/se33-6ad4.json';

export const LIMIT_PARAM = '$limit=';
export const OFFSET_PARAM = '$offset=';

export const CARRIERS_TAB_INDEX = 0;
export const PLANES_TAB_INDEX = 1;
export const GEO_TAB_INDEX = 2;
export const CALC_TAB_INDEX = 3;

export const HEADERS = {
    'X-RapidAPI-Host': MAIN_HOST,
    'X-RapidAPI-Key': API_KEY
  };
export const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
export const NEEDED_AMOUNT_OF_MARKERS = 200;
export const AMOUNT_OF_MARKERS_DOWNLOADED_AT_ONCE = 10;