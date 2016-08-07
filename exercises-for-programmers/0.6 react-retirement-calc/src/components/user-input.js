import React, { Component } from 'react';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentAge: '',
      goalAge: '', 
      retirementYear: ''
    };
  }
  
  render() {
    return (
      <div>
        <div className="prompts">
          <label htmlFor="age">What is your current age?</label>
          <input type="text" id="age" 
            value={this.state.currentAge}
            onChange={event => this.setState({currentAge: event.target.value})}/>
          {this.state.currentAge}
        </div>
          <div className="prompts">                
           <label htmlFor="goal">What age do you want to retire?</label>
           <input type="text" id="goal" 
             value={this.state.goalAge}
             onChange={event => this.setState({goalAge: event.target.value})}/>
            {this.state.goalAge}
          </div>                  
      </div>
    )
  }
}

export default UserInput;