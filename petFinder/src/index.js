import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Refinements from './components/Refinements';
import PetList from './components/PetList';

class App extends Component {
  //Set state
    //pets: []
    //selectedPet: null

  //axios

  //render & pass props
  render() {
    return (
      <div id="App">
        <h1>App Component</h1>
        <Refinements />
        <PetList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
