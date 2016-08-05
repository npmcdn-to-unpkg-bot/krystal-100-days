import React, { Component } from 'react';

class NumInput extends Component {
  render() {
    return (
      <div> 
        <div className="input">
          <label htmlFor="numOne">What is your first number?</label>
          <input type="text" id="numOne" onChange={this.onInputChange}/>
        </div>  
        <div className="input">
          <label htmlFor="numTwo">What is your second number?</label>
          <input type="text" onChange={this.onInputChange}/>
        </div>
      </div>
    )
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

};

export default NumInput;