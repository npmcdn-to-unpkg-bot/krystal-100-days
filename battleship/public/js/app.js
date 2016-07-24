var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    {
      locations: [0, 0, 0],
      hits: ["", "", ""]
    },
    {
      locations: [0, 0, 0],
      hits: ["", "", ""]
    },
    {
      locations: [0, 0, 0],
      hits: ["", "", ""]
    }
  ],
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    //Indicate a miss
    return false;
  },
  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        //ship is still floating
        return false;
      }
    }
    return true;
  },
  generateShipLocations: function() {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  }, 
  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
    if (direction === 1) {
      //horizontal ship
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
    } else {
      //vertical ship
      row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
      col = Math.floor(Math.random() * this.boardSize);
    }
    
    var newShipLocations = [];
    for(var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        //add location to array for new horizontal ship
        newShipLocations.push(row + "" + (col + i));
      } else {
        //add location to array for new vertical ship
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }

};

var controller = {
  guesses: 0,
  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        console.log("Done")
        view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
      }
    }

  }
};

var view = {
  displayMessage: function (msg) {
    //Use DOM to get #messageArea
    //set innerHTML to message passed to the displayMessage method

    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    //set class attribute to hit using setAttribute
    //get string id that has 2 nunbers for the location of hit or miss
    //Use the DOM to get the element with that id
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    //set class attribute to miss using setAttribute
    //get string id that has 2 nunbers for the location of hit or miss
    //Use the DOM to get the element with that id
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

function parseGuess(guess) {

  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and anumber on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);


    if (isNaN(row) || isNaN(column)) {
      console.log("Oops, that isn't on the board");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  //failed check
  return null;
}

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
  
  model.generateShipLocations();
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    //Preven any other actions like submitting
    return false;
  }
}

function handleFireButton() {
  console.log('clicked');
  var guessInput = document.getElementById("guessInput");
  var userGuess = guessInput.value.toUpperCase();
  controller.processGuess(userGuess);
  guessInput.value = "";
}

window.onload = init;