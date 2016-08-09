var React = require('react');
var PetList = require('PetList');
var Selections = require('Selections');

var Main = React.createClass {
  render: function() {
    return (
      <div>
        <div>
          <div>
            <p>Main.jsx</p>
            
            <Selections />
            <PetList />
          </div>
        </div>
      </div>
    );
  }

  
}

module.exports = Main;
