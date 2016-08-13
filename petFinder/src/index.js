import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Refinements from './components/Refinements';
import PetList from './components/PetList';

const petsArr = [
  {
    name: "Duke",
    description: "Duke is a dog",
    breed: "Rottweiler",
    age: 3,
    id: 1
  },
  {
    name: "Daisy",
    description: "Daisy is a dog",
    breed: "Pit Bull",
    age: 2,
    id: 2
  },
  {
    name: "Jesse",
    description: "Jesse is a dog",
    breed: "Doberman",
    age: 5,
    id: 3
  },
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: petsArr
    }
  }

  //Set state
    //pets: []
    //selectedPet: null

  //axios

  //render & pass props
  render() {
    return (
      <div id="app">
        <h1>App Component</h1>
        <div className="componentsWrapper">
          <Refinements />
          <PetList pets={this.state.pets}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
