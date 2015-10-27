var React = require('react')
var ReactDOM = require('react-dom')
var $ = require('jquery')
var Link = require('react-router').Link

var Contact = React.createClass({
  render: function(){
     return (
        <p>username</p>
      // <p>this.props.contacts.username</p>
      );
  }
})

React.renderComponent(<Contact>, document.getElementById('messenger'));