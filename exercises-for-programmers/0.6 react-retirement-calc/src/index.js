import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/user-input.js';
import RetirementOutput from './components/retirement-output.js';

class Calculator extends React.Component {
  render () {
    return (
      <div>
        <h1>Retirement Calculator</h1>
        <UserInput />
        <RetirementOutput />
      </div>  
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('container'));