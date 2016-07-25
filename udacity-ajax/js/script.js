
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
    var nyTimesAPI = "hidden";
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
      $.each(data.response.docs, function(i, article){
        $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
      });
    }
  
    $.getJSON(nyTimesUrl, nyTimesObj, displayArticles).fail(function(){
      $nytElem.text("NY Times Articles Could Not Be Loaded");
    });
  
    return false;
};

$('#form-container').submit(loadData);
