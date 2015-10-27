var React = require('react')
var ReactDOM = require('react-dom')
var $ = require('jquery')
var Link = require('react-router').Link

var mountNode = document.getElementById('app');

var datastuffs = {users: [
  {
    "username": "cottoncandy",
      "email": "unicorn@unicorn.com",
      "about": "I like things.",
      "interests": ["python"]
  },
  {
    "username": "puppies",
      "email": "unicornpuppies@unicorn.com",
      "about": "I like puppies.",
      "interests": ["python"]
  },
  {
    "username": "blargl",
      "email": "unicornpuppiesdlfjsdklfj@unicorn.com",
      "about": "I like puppies.",
      "interests": ["ruby"]
  }
]}

var Messenger = React.createClass({
  getInitialState: function (){
    return {
      current: null 
    }
  },
  render: function () {
    return (
      <ul>
        {datastuffs.users.map(function(element) {
          return (<li>
            <p>{JSON.stringify(element.username).replace(/"|'/g,"")}</p>
            </li>)
          })
        }
      </ul>
    )
  }
});

module.exports = Messenger;
