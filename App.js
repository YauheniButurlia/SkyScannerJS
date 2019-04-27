
import * as React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
//import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';

import AppContainer from './AppContainer';
import reducer from './Reducer';
/*
const client = axios.create({
  baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
  responseType: 'json'
});
*/
const store = createStore(reducer);//, applyMiddleware(axiosMiddleware(client))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
