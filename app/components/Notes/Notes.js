var React = require('react');

var Notes = React.createClass({
	        // this.prop.notes is what <Note> get from Profile at Profile.js
  render: function(){
    return (
      <div>
        <p>NOTES </p>
        <p> {this.props.notes}</p>
      </div>
    )
  }
})

module.exports = Notes;