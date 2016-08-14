import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import Login from './components/Login';
import Main from './components/Main';
import Drawer from './components/Drawer';
import WellData from './components/WellData';

import createStore from './createStore';

const store = createStore()

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Scene key="modal" component={Modal}>
            <Scene key="root">
              <Scene key="drawer" component={Drawer} open={false} >
                <Scene key="container">
                  <Scene key="main" title="Well Sense" initial={true} component={Main} type="replace" />
                  <Scene key="welldata" title="Historical Usage" component={WellData} type="replace" />
                </Scene>
              </Scene>
              <Scene key="login" direction="vertical" schema="modal" hideNavBar={true} component={Login} />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}
