import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as LoginActions from '../actions/LoginActions';
import Style from '../style';

class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        'Home': 'main', 
        'Historic Usage': 'welldata', 
        'My Well Info': 'main', 
        'My Servicer': 'main', 
        'Profile': 'main', 
        'Change Password': 'main', 
        'Notification': 'main',
        'Logout': 'logout'
      }
    }
  }

  render() {
    const state = this.state;
    const menuItems = [];

    //Add Buttons given by the state
    for(let key in state.menuItems){
      const sceneKey = state.menuItems[key];

      menuItems.push(
        <TouchableHighlight key={key} style={Style.SideMenu.item} onPress={() => this._onPress(sceneKey)}>
          <Text> {key} </Text>
        </TouchableHighlight>
      );
    }

    return (
      <View style={Style.SideMenu.view} > 
        {menuItems}
      </View>
    )
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.loggedIn){
      Actions.login();
    }
  }

  _onPress(sceneKey){
    if(sceneKey === 'logout') 
      this_.logout()
    else {
      Actions[sceneKey]();
    }
  }

  _logout() {
    LoginActions.logout()(this.props.dispatch)
  }
}

function mapStateToProps(state){
  return {
    loggedIn: state.login.loggedIn,
    error: state.error
  }
}

export default connect(mapStateToProps)(SideMenu)

