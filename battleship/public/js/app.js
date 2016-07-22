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

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("26");
view.displayMessage("Is this working?");

