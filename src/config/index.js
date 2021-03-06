export const API_KEY = 'a45c7b6a8emshf8d62bbc6343fccp1b13dfjsn6bb5515281c4';
export const MAIN_HOST = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

export const CARRIERS_REQUEST = '/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-07-01?inboundpartialdate=2019-09-01';
export const PLACES_REQUEST = '/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm';
export const GEO_REQUEST = 'https://data.sfgov.org/resource/se33-6ad4.json';

export const LIMIT_PARAM = '$limit=';
export const OFFSET_PARAM = '$offset=';

export const HEADERS = {
    'X-RapidAPI-Host': MAIN_HOST,
    'X-RapidAPI-Key': API_KEY
  };
export const REQUEST_OPTIONS = {
  method: 'GET',
  headers: HEADERS
};


export const CARRIERS_ENDPOINT = 'https://' + MAIN_HOST + CARRIERS_REQUEST;
export const PLACES_ENDPOINT = 'https://' + MAIN_HOST + PLACES_REQUEST;
export const GEO_ENDPOINT = 'https://data.sfgov.org/resource/se33-6ad4.json' + '?' +  '$limit='  + 120;