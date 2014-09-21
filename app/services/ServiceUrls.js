//Service api url
var apiHost = 'https://api.spotify.com'; //production

//service urls
var ServiceUrls = {
		'search' 						: apiHost + '/v1/search/',
		'albums'						: apiHost + '/v1/artists/{%id%}/albums',
		'tracks'						: apiHost + '/v1/albums/{%id%}/tracks',
		
};

//Service Action Identifiers that can identify the UI handler
var ServiceActions = {
		'search' : 0,
		'albums' : 1,
		'tracks' : 2
};

