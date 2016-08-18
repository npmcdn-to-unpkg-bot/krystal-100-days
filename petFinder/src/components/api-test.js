$(document).ready(function() {
  console.log(0);


// http://api.petfinder.com/pet.find?format=json&key=API_KEY&animal=dog&location=94089&age=senior&count=10
  var petURL = "http://api.petfinder.com/pet.find?format=json&key=" + API_KEY + "&animal=dog&location=33433";
  console.log(petURL)

  $.ajax({
    type: 'GET',
    url: petURL + '&callback=?',
    dataType: "jsonp",
  }).done(function(response) {
    console.log(response.petfinder.pets.pet);
    var petArray = response.petfinder.pets.pet;
    console.log(petArray)
    for (var i = 0; i < petArray.length; i++) {
      var petType = petArray[i];
      var petName = petType.name['$t'];
      console.log(petName)
      var petBreed = petType.breeds.breed['$t'];
      console.log(petBreed)
    }


  }).error(function(err) {
    console.log('Error retreiving data');
  });
});
