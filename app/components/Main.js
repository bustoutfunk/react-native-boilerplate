import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Style from '../style';

class Main extends Component {
  componentDidMount() {
    if(!this.props.loggedIn){
      Actions.login();
    }
  }

  render() {
    return (
      <View style={Style.Global.view}>
        <Text> Main Page </Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    loggedIn: state.login.loggedIn,
    error: state.error
  }
}

export default connect(mapStateToProps)(Main)
