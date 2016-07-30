$(document).ready(function(){
  var url = "http://api.open-notify.org/astros";

  $.ajax({
    url: url,
    dataType: "jsonp",
  }).done(function(response) {
    console.log(response)
    var people = response.people;
    console.log(people)
  })  
});



//API
  //message
  //number
  //people []
    //craft
    //name

//Display
  //Row: Name   Craft
  //List: Name  Craft

//Group by craft
//Alphabetical