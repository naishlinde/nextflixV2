/**
Group 14 - Project: Next-Flix

**/

/**
resources:
 - localStorage.setItem("name", "John Doe");
   localStorage.getItem("name");
 - https://www.w3schools.com/js/js_api_web_storage.asp
 -
**/

/**
PSEUDOCODE:

main site displays 5 buttons

the buttons each correspond to their own library

there are 5 libraries - one for each group member's selections

each library contains a selection of movies.

when a button is clicked it directs the user to the next page which displays a
question and provides multiple choices.

when a choice is selected, the program will direct the user to the final page,
upon which they will find their recommended movie, a description of the movie,
and an image corresponding to the movie.


 title page -> fruit page -> final page(question + random movie suggestion)




**/


movies1Library = ["Kung Fu Hustle","Naruto the Movie: Ninja Clash in the Land of Snow","Chicken Little","Pan’s Labyrinth","Ghost Rider"];

movies2Library = ["Oceans 11","Platoon","Silver Linings Playbook","The Big Lebowski","Killing Them Softly"];

movies3Library = ["A Whisker Away","Moonlight","Lady Bird","The Florida Project","Burning","Inception","Mother","Uncut Gems"];

movies4Library = ["The Breadwinner","Song of the Sea","I lost My Body","Klaus","Rango"];

movies5Library = ["Long Shot","Safety Not Guaranteed","50 First Dates","I Care A Lot","Alive From New York", "New In Town", "Homecoming King", "Easy A"];

//Below is the button function which directs the user to the final page

var buttonToFinal = $('button');

buttonToFinal.click(function() {
  window.location = "fruitpage/finalpage/final.html"
});
