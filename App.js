
import * as React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';

import AppContainer from './src/containers/AppContainer';
import reducer from './src/reducers/Reducer';

const initialState = { data1: [], data2: [], loading1: false, loading2: false, error1: null, error2: null };
const store = createStore(reducer, initialState);//, applyMiddleware(axiosMiddleware(client))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
