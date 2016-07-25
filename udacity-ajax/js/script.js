function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem = $('#nytimes-articles');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview
  var streetStr = $("#street").val();
  var cityStr = $("#city").val();
  var address = streetStr + ", " + cityStr
  var nyTimesAPI = "#";
  var url = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '';
  var nyTimesObj = {
    'api-key': nyTimesAPI,
    'q': cityStr,
    'sort': 'newest'
  };
  var nyTimesUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";


  $greeting.text('So you want to live at ' + address + '?');
  $body.append('<img class="bgimg" src="' + url + '">');

  function displayArticles(data) {
    $.each(data.response.docs, function (i, article) {
      $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
    });
  }

  $.getJSON(nyTimesUrl, nyTimesObj, displayArticles).fail(function () {
    $nytElem.text("NY Times Articles Could Not Be Loaded");
  });


  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
  }).done(function(response){
      var articleList = response[1];

      for (var i = 0; i < articleList.length; i++) {
        articleStr = articleList[i];
        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
        $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>')

      };
  });



  return false;
};

$('#form-container').submit(loadData);