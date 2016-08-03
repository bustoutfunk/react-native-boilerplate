var actions = [
  'SIGNUP',
  'LOGIN',
  'LOGOUT'
];

var hash = {};

actions.forEach(function(item){
  hash[item] = item;
});

export default hash
