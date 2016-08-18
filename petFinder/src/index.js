import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Refinements from './components/Refinements';
import PetList from './components/PetList';
var superagent = require('superagent');
var jsonp = require('superagent-jsonp');

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
      // pets: petsArr
      pets: []
    }
  }

  loadPetsFromServer() {

    var API_KEY = "dedb026ea8e95977021fd47e36e08c2a";


    var petURL = "http://api.petfinder.com/pet.find?format=json&key=" + API_KEY + "&animal=dog&location=33433";
    console.log(petURL);
    superagent.get(petURL).use(jsonp({
      timeout: 4000
    })).end((error, response) => {
      this.setState({
        pets: response.body.petfinder.pets.pet
      });
         console.log(this.state.pets);
         console.log('state')
    });

  }

  componentWillMount() {
    this.loadPetsFromServer();
    console.log("Api called")
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
