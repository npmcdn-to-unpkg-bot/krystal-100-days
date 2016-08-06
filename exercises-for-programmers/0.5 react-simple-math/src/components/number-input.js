import React, { Component } from 'react';

class NumInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOne: '',
      numTwo: ''
    };
  }


  render() {
    return (
      <div> 
        <div className="input">
          <label htmlFor="numOne">What is your first number?</label>
          <input type="text" id="numOne" 
            value={this.state.numOne}
            onChange={event => this.setState({numOne: event.target.value})}/>
            Value is: {this.state.numOne}
        </div>  
        <div className="input">
          <label htmlFor="numTwo">What is your second number?</label>
          <input type="text" 
            value={this.state.numTwo}
            onChange={event => this.setState({numTwo: event.target.value})}/>
            Value is: {this.state.numTwo}
        </div>
      </div>
    )
  }

  // onInputChange = (event) => {
  //   this.setState({
  //     numOne: 
  //   })
  // }

};

export default NumInput;