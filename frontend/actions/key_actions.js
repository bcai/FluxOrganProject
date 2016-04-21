var AppDispatcher = require('../dispatcher/dispatcher.js');

var KeyActions = {
  // sends a payload to the AppDispatcher
  // payload contains the "actionType" and a 'noteName'
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEYDOWN",
      noteName: key
    });
    // console.log("action dispatched KEYDOWN");
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEYUP",
      noteName: key
    });
    // console.log("action dispatched KEYUP");
  }
};

module.exports = KeyActions;
