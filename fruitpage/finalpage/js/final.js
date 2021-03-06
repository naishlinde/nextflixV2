movies1Library = ["Kung Fu Hustle","Naruto the Movie: Ninja Clash in the Land of Snow","Chicken Little","Pan’s Labyrinth","Ghost Rider"];

movies2Library = ["Oceans 11","Platoon","Silver Linings Playbook","The Big Lebowski","Killing Them Softly"];

movies3Library = ["A Whisker Away","Moonlight","Lady Bird","The Florida Project","Burning","Inception","Mother","Uncut Gems"];

movies4Library = ["The Breadwinner","Song of the Sea","I lost My Body","Klaus","Rango"];

movies5Library = ["Long Shot","Safety Not Guaranteed","50 First Dates","I Care A Lot","Alive From New York", "New In Town", "Homecoming King", "Easy A"];

var suggestionTrigger = $('button');

suggestionTrigger.on('click', function() {
    var randomMovie = Math.floor(Math.round(((Math.random() * 5))));
    $('#outputcontent').append(movies1Library[randomMovie]);
});
