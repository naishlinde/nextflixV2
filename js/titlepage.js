/**
 * Author(s): Naish Linde, May alvarez, Leica Tran, Hime Kanno, Chester Chen
 * Date: 3/2/2021
 * Title: Next -> Flix
**/

/**

unogsNG NextGen Netflix Global Search API

link:
https://rapidapi.com/unogs/api/unogsng?endpoint=apiendpoint_6f0b642e-ee36-43c5-8a53-30aa86d9a8ff

**/

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogsng.p.rapidapi.com/search?type=movie&limit=1&subtitle=english&countrylist=78&audio=english",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "75315872b0msh9c9e2b899bec1c0p1a8451jsnbb30815cd0ab",
		"x-rapidapi-host": "unogsng.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
