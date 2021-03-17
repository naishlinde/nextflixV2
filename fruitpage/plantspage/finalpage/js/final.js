

// movies1Library = ["Kung Fu Hustle","Naruto the Movie: Ninja Clash in the Land of Snow","Chicken Little","Pan’s Labyrinth","Ghost Rider"];
//
// movies2Library = ["Oceans 11","Platoon","Silver Linings Playbook","The Big Lebowski","Killing Them Softly"];
//
// movies3Library = ["A Whisker Away","Moonlight","Lady Bird","The Florida Project","Burning","Inception","Mother","Uncut Gems"];
//
// movies4Library = ["The Breadwinner","Song of the Sea","I lost My Body","Klaus","Rango"];
//
// movies5Library = ["Long Shot","Safety Not Guaranteed","50 First Dates","I Care A Lot","Alive From New York", "New In Town", "Homecoming King", "Easy A"];
//
// var suggestionTrigger = $('button');
//
// suggestionTrigger.on('click', function() {
//     var randomMovie = Math.floor(Math.round(((Math.random() * 5))));
//     $('#outputcontent').append(movies1Library[randomMovie]);
// });

/**

unogsNG NextGen Netflix Global Search API

link:
https://rapidapi.com/unogs/api/unogsng?endpoint=apiendpoint_6f0b642e-ee36-43c5-8a53-30aa86d9a8ff

Below is where we are developing the javascript which will access the netflix
api listed above.

**/

var output = $('#output');
var title = $('#title');
var about = $('#description');
var poster = $('#movieposter');

var apiButton = $('#apibutton');
var apiOutput = $('#apioutput');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogsng.p.rapidapi.com/search?type=movie&limit=100&subtitle=english&countrylist=78&audio=english",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "75315872b0msh9c9e2b899bec1c0p1a8451jsnbb30815cd0ab",
		"x-rapidapi-host": "unogsng.p.rapidapi.com"
	}
};

// $.ajax(settings).done(function (response) {
//   console.log(response);
//   var random = Math.floor(Math.random() * 101);
//   console.log(response.results[random]);
// });

apiButton.on('click', function(){
  $.ajax(settings).done(function (response) {
    var random = Math.floor(Math.random() * 101);
    apiOutput.html("<br>" + "<h1 id='apititle'>" + response.results[random].title + "</h1>");
  });
});

/**below is where we are developing the javascript which will get a random movie
from the objects we made **/


var hMovies = {
  1: "A Whisker Away",
  2: "Moonlight",
  3: "Lady Bird",
  4: "The Florida Project",
  5: "Uncut Gems",
};

var cMovies = {
  1: "The Breadwinner",
  2: "Song of the Sea",
  3: "I lost My Body",
  4: "Klaus",
  5: "Rango",
};

var mMovies = {
  1: "50 First Dates",
  2: "Alive From New York",
  3: "Easy A",
  4: "Homecoming King",
  5: "New In Town",
};

var lMovies = {
	1: "Kung Fu Hustle",
	2: "Naruto the Movie: Ninja Clash in the Land of Snow",
	3: "Chicken Little",
	4: "Pan’s Labyrinth",
	5: "Ghost Rider",
};

var nMovies = {
  1: "Oceans 11",
  2: "Platoon",
  3: "Silver Linings Playbook",
  4: "The Big Lebowski",
  5: "Killing Them Softly",
};

var movieHime = $('#button1');
var movieCheston = $('#button2');
var movieMay = $('#button3');
var movieLeica = $('#button4');
var movieNaish = $('#button5');

movieHime.on('click', function () {
  var picker = Math.floor(Math.round(Math.random() * 4) + 1);
  title.html('<br>' + '<p>' + hMovies[picker] + '</p>');
});

movieCheston.on('click', function () {
  var picker = Math.floor(Math.round(Math.random() * 4) + 1);
  title.html('<br>' + '<p>' + cMovies[picker] + '</p>');
});

movieMay.on('click', function () {
  var picker = Math.floor(Math.round(Math.random() * 4) + 1);
  title.html('<br>' + '<p>' + mMovies[picker] + '</p>');
});

movieLeica.on('click', function () {
  var picker = Math.floor(Math.round(Math.random() * 4) + 1);
  title.html('<br>' + '<p>' + lMovies[picker] + '</p>');
});

movieNaish.on('click', function () {
  var picker = Math.floor(Math.round(Math.random() * 4) + 1);
  title.html('<br>' + '<p>' + nMovies[picker] + '</p>');
});
