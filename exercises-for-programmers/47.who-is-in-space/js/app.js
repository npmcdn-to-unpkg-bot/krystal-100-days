$(document).ready(function(){
  var url = "http://api.open-notify.org/astros";

  $.ajax({
    url: url,
    dataType: "jsonp",
  }).done(function(response) {
    console.log(response)
    var people = response.people;
    console.log(people)
    
    var spaceHTML = '<ul class="output">';
    spaceHTML += '<li><div class="th">' + "Name" + '</div>';
    spaceHTML += '<div class="th">' + "Craft" + '</div></li>';
    
    for (var i = 0; i < people.length; i++) {
      var details = people[i];
      var name = details.name;
      var craft = details.craft;
      
       spaceHTML += '<li>';
       spaceHTML += '<div class="name">' + name + '</div>';
       spaceHTML += '<div class="craft">' + craft + '</div>';
       spaceHTML += '</li>';
      
    }
    spaceHTML += '</ul>';
    $("#outerSpace").append(spaceHTML);
    
    
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