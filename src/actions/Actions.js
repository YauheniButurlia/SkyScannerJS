import { REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, DELETE} from '../reducers/Reducer';

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

export const uploadData = (id) => ({
  
});
