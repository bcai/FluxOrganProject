var React = require('react'),
    KeyActions = require('../actions/key_actions.js'),
    KeyStore = require('../stores/key_store.js'),
    Note = require('../util/note.js'),
    Tones = require('../constants/tones.js');

var OrganKey = React.createClass({
  getInitialState: function(){
    return {playing: false};
  },

  _keyChanged: function(){
    this.setState({playing: KeyStore.isPressed(this.props.noteName)});
  },

  componentDidMount: function(){
    this.note = new Note(Tones[this.props.noteName]);
    this.listenerToken = KeyStore.addListener(this._keyChanged);
  },

  componentWillUnmount: function(){
    KeyStore.removeListener(this.listenerToken);
  },

  render: function(){
    //make the note start playing or stop
    if (this.note){
      if (this.state.playing) {
        this.note.start();
      } else {
        this.note.stop();
      }
    }
    return (
       <div>{this.props.noteName}</div>
    );
  }
});

module.exports = OrganKey;
