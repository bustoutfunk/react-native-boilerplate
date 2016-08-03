import ErrorConstants from '../constants/ErrorConstants';

const initialState = "";

export default function(state = initialState, action){
  console.log(action);
  switch(action.type){
    case ErrorConstants.APPLICATION_ERROR:
      return action.err;

    case ErrorConstants.RESET:
      return "";

    default:
      return state;
  }
}
