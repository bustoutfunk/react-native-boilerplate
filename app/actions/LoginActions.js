import LoginConstants from '../constants/LoginConstants';
import ErrorConstants from '../constants/ErrorConstants';

export function login(model) {
  return function(dispatch) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model)
    })
    .then((response) => response.json()) // Convert Response in readable JSON
    .then(function(responseJson){
      if(responseJson.success){
        console.log(responseJson);
        dispatch({
          type: LoginConstants.LOGIN
        });
      }
      else {
        throw responseJson.err;
      }
    })
    .catch(function(err){
      console.log('LOGIN ERROR:', err);
      dispatch({
        type: ErrorConstants.APPLICATION_ERROR,
        err: err
      });
    });
  }
}

export function logout(){
  return function(dispatch) {
    fetch('http://localhost:3000/logout', {
      method: 'POST'
    })
    .then((response) => response.json())
    .then(function(responseJson){
      if(responseJson.success){
        console.log('LOGOUT SUCCESS')
        dispatch({
          type: LoginConstants.LOGOUT
        })
      }
      else {
        throw responseJson.err;
      }
    })
    .catch(function(err){
      console.log('LOGOUT ERROR:', err);
      dispatch({
        type: ErrorConstants.APPLICATION_ERROR,
        err: err
      })
    })
  }
}

export function resetError(){
  return {
    type: ErrorConstants.RESET
  }
}
