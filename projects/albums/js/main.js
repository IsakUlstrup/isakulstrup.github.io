
// Global variables
Debug = true
LastfmUser = "isakbarnet"
LastfmAPIKey = "531454e3f1a0915bb5874e21deb59323"




// cache handlers
function storeJSONCache (objectKey, storeObject) {
	localStorage.setItem(objectKey, JSON.stringify(storeObject));
}

function getJSONCache (objectKey) {
	return JSON.parse(localStorage.getItem(objectKey));
} 


// LastFM API stuff
function lastfmQuery (method, ignoreCache = false) {
	if (getJSONCache(method) == null || ignoreCache == true) {
		if (Debug == true) {console.log(method + " is not in cache or we are ignoring cache, sending request");}
		var returnData;
		$.getJSON("http://ws.audioscrobbler.com/2.0/?method=" + method + "&api_key="+ LastfmAPIKey +"&format=json&callback=?", function(queryResponse) {
			if (queryResponse.error) {
				returnData = 'Error: ' + queryResponse.message;
			} else {
				returnData = queryResponse[Object.keys(queryResponse)[0]];
				returnData = returnData[Object.keys(returnData)[0]];
			}
			// update cache
			storeJSONCache(method, returnData);
		});
	}
	if (Debug == true) {console.log(method + " is in cache, using local value");}
}



// Helper functions
function getTopAlbums (artist) {
	lastfmQuery("artist.gettopalbums&artist=" + artist);
}

function getTopArtists (user = LastfmUser, period = "1month") {
	lastfmQuery("user.gettopartists&user=" + user + "&period=" + period);
}





// Main code

getTopArtists();
getTopAlbums("Listener");







