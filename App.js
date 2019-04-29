
import * as React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
//import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';

/*
const client = axios.create({
  baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
  responseType: 'json'
});
*/
const initialState = { data1: [], data2: [], loading1: false, loading2: false, error1: null, error2: null };
const store = createStore(reducer, initialState);//, applyMiddleware(axiosMiddleware(client))

import AppContainer from './AppContainer';
import reducer from './Reducer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
