/**
 * Author(s): Naish Linde, May alvarez, Leica Tran, Hime Kanno, Chester Chen
 * Date: 3/2/2021
 * Title: Next -> Flix
**/



const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&language=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "75315872b0msh9c9e2b899bec1c0p1a8451jsnbb30815cd0ab",
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
