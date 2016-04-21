require('./util/key_listener.js');

var React = require('react'),
    ReactDOM = require('react-dom'),
    Note = require('./util/note.js'),
    Tones = require('./constants/tones.js'),
    Organ = require('./components/organ.jsx');


// window.note = new Note(1396.91);


document.addEventListener('DOMContentLoaded', function(){
  var organKeyList = [];

  Object.keys(Tones).map(function(value){
    organKeyList.push(value);
  });

  ReactDOM.render(
    <Organ organKeyList={organKeyList}/>,
    document.getElementById('content')
  );
});
