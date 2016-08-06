import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  componentDidMount() {
    if(!this.props.loggedIn){
      Actions.login();
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
