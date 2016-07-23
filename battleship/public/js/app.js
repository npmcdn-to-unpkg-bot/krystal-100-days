var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    {
      locations: ["10", "20", "30"],
      hits: ["", "", ""]
    },
    {
      locations: ["32", "33", "34"],
      hits: ["", "", ""]
    },
    {
      locations: ["63", "64", "65"],
      hits: ["", "", ""]
    }
  ],
  fire: function(guess) {
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
  isSunk: function(ship) {
    for(var i = 0; i < this.shipLength; i++) {
      if(ship.hits[i] !== "hit") {
        //ship is still floating
        return false;
      }
    }
//    return true;
  }  
  
};

var view = {
  displayMessage: function(msg) {
    //Use DOM to get #messageArea
    //set innerHTML to message passed to the displayMessage method
    
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  
  displayHit: function(location) {
    //set class attribute to hit using setAttribute
    //get string id that has 2 nunbers for the location of hit or miss
    //Use the DOM to get the element with that id
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  
  displayMiss: function(location) {
    //set class attribute to miss using setAttribute
    //get string id that has 2 nunbers for the location of hit or miss
    //Use the DOM to get the element with that id
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

//view.displayMiss("00");
//view.displayHit("34");
//view.displayMiss("55");
//view.displayHit("26");
//view.displayMessage("Is this working?");
model.fire("53");
model.fire('06');
model.fire("16");
model.fire("63");
model.fire("64");

