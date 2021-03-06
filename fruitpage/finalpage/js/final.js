

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

$.ajax(settings).done(function (response, event) {
  console.log(response);
  var random = Math.floor(Math.random() * 101);
  console.log(response.results[random]);
});




/**below is where we are developing the javascript which will get a random movie
from the objects we made **/

// var hMovies = {
//   1: "";
//   2: "";
//   3: "";
//   4: "";
//   5: "";
// };
//
// var cMovies = {
//   1: "";
//   2: "";
//   3: "";
//   4: "";
//   5: "";
// };
//
// var mMovies = {
//   1: "";
//   2: "";
//   3: "";
//   4: "";
//   5: "";
// };
//
// var lMovies = {
//   1: "";
//   2: "";
//   3: "";
//   4: "";
//   5: "";
// };
//
// var nMovies = {
//   1: "";
//   2: "";
//   3: "";
//   4: "";
//   5: "";
// };
//
// var hButton = $('#button1')
// var cButton = $('#button2')
// var mButton = $('#button3')
// var lButton = $('#button4')
// var nButton = $('#button5')
//
// function getMovie() {
//   hButton.on('click', function(){
//   });
// }
