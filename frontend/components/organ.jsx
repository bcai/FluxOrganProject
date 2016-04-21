var React = require('react'),
    Tones = require('../constants/tones.js'),
    OrganKey = require('./organ_key.jsx');

var Organ = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.organKeyList.map(function(value,index){
          return <OrganKey key={index} noteName={value}/>;
        })}
      </div>
    );
  }
});

module.exports = Organ;
