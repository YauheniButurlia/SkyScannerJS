
import * as React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';

import AppContainer from './src/containers/AppContainer';
import reducer from './src/reducers';

import {apiMiddleware} from './src/services/api';

/*
const initialState = { data1: [], data2: [], data3: [], loading1: false,
   loading2: false, loading3: false, error1: null, error2: null, error3: null};
   */
const initialState = {carriers: {data: [], error: '', loading: false}, 
                      places: {data: [], error: '', loading: false}, 
                      markers: {data: [], error: '', loading: false},
                      selectedTabIndex: 0};

const store = createStore(reducer, initialState, applyMiddleware(apiMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
