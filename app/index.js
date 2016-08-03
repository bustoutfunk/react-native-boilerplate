import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import Login from './components/Login';
import Main from './components/Main';

import createStore from './createStore';

const store = createStore()

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Scene key="modal" component={Modal}>
            <Scene key="root">
              <Scene key="main" title="Main" initial={true} component={Main}></Scene>
              <Scene key="login" direction="vertical" schema="modal" hideNavBar={true} component={Login}></Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}
