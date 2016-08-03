var actions = [
  'APPLICATION_ERROR',
  'RESET'
];

var hash = {};

actions.forEach(function(item){
  hash[item] = item;
});

export default hash
