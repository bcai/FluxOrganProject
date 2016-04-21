var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var _currentKeys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.isPressed = function(key){
  // console.log("isPressed" + _currentKeys.indexOf(key));
  return ((_currentKeys.indexOf(key) !== -1) ? true : false);
};

var addKey = function (key) {
  _currentKeys.push(key);
  console.log(_currentKeys);
  KeyStore.__emitChange();
};

var removeKey = function (key){
  _currentKeys.splice(_currentKeys.indexOf(key), 1);
  KeyStore.__emitChange();
};

// Keystore catches the event, gets the noteName out of payload,
// and adds it to its array of '_currentKeys'

// Keystore emits a change event in '#addKey/#removeKey'
KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case 'KEYUP':
    removeKey(payload.noteName);
    break;
  case 'KEYDOWN':
    addKey(payload.noteName);
    break;
  }
};

module.exports = KeyStore;
