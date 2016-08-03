import LoginConstants from '../constants/LoginConstants';
import ErrorConstants from '../constants/ErrorConstants';

const initialState = {
  loggedIn: false
}

export default function(state = initialState, action){
  switch(action.type){
    case LoginConstants.LOGIN:
      return {
        loggedIn: true
      }
    case LoginConstants.LOGOUT:
      return {
        loggedIn: false
      }
    default:
      return state;
  }
}
