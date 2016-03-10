var React = require('react');
var ReactDOM = require('react-dom');

var helloWorld = React.createClass({
  render: function(){
    return (
      <div> Hello World </div>
    )
  }
});

ReactDOM.render(
  <helloWorld />,
  document.getElementById('app')
)