var React = require('react');
var ReactDOM = require('react-dom')
// Creating a react component
var Main = React.createClass({
	// Render: specify what the UI will looks like for this element
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});
// React dom will take the component (first arg), put it in the specify placed in the html (second arg)
ReactDOM.render(<Main />, document.getElementById('app'));