var KeyActions = require('../actions/key_actions.js');

var NOTES = {
  65: "C6",
  83: "D6",
  68: "E6",
  70: "F6",
  71: "G6",
  72: "A6",
  74: "B6",
  75: "C7"
};

// key listener catches "keydown" event and invokes KeyActions.keyPressed w/
// the appropriate key name
$(document).on('keydown', function(event){
  var keyCode = event.keyCode;
  KeyActions.keyPressed(NOTES[keyCode]);
  // console.log("keyPressed: " + NOTES[keyCode]);
});

$(document).on('keyup', function(event){
  var keyCode = event.keyCode;
  KeyActions.keyReleased(NOTES[keyCode]);
  // console.log("keyReleased: " + NOTES[keyCode]);
});
