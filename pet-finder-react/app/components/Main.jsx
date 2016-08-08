var React = require('react');
var PetList = require('PetList');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx</p>
          {props.children}
          <PetList />
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
