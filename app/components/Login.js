import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import * as LoginActions from '../actions/LoginActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    //If already logged in, log out
    if(this.props.loggedIn){
      Actions.pop();
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput 
          placeholder="Username" 
          onChangeText={(text)=> this.setState({username: text})}
          style={{height: 20}}
        />
        <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text)=>this.setState({password: text})}
          style={{height: 35}}
        />
        <Button onPress={()=>this._loginPressed()}>
          Login
        </Button>
      </View>
    )
  }

  componentWillReceiveProps(nextProps) {
    // Error Handler
    if(nextProps.error){
      Alert.alert(
        'Login Failed', 
        nextProps.error,
        [{text: 'OK', onPress: () => this.props.dispatch(LoginActions.resetError())}]
      );
    }

    // If currently logged in, move to Main Page
    if(nextProps.loggedIn){
      Actions.main();
      Actions.pop();
    }
  }
  
  _loginPressed() {
    LoginActions.login({
      username: this.state.username,
      password: this.state.password
    })(this.props.dispatch)
  }
}

function mapStateToProps(state){
  console.log('STATE: ', state);
  return {
    loggedIn: state.login.loggedIn,
    error: state.error
  }
}

export default connect(mapStateToProps)(Login)
