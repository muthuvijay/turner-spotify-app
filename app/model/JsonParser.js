//Parse the JSON results and frame according to UI

var JSONParser = function(){
	
	return {
		
		searchResponse : function(response){

			var data = (response.artists && response.artists.items)?response.artists.items:[];
			if(!data.length) return false;
			
			var $artists = [],$obj={};
			angular.forEach(data,function(r){

				var items = {
						
						artist_name : r.name,
						artist_image : (r.images[1] && r.images[1].url)?r.images[1].url:
										(r.images[0] && r.images[0].url)?r.images[0].url:
											(r.images[2] && r.images[2].url)?r.images[1].url:NO_USER_PIC,
						artist_id : r.id
				}
				$artists.push(items);
			});
			
			if(response.artists != undefined)
				$page = {next:response.artists.next,prev:response.artists.previous};
			
			$obj = {items:$artists,page:$page};
			
			return $obj;
		},
		
		//Album response
		albumResponse : function(response){

			var data = response.items || [];
			if(!data.length) return false;
			
			var $albums = [],$obj={};
			angular.forEach(data,function(r){

				var items = {
						
							album_name : r.name,
							album_image : (r.images[1] && r.images[1].url)?r.images[1].url:
											(r.images[0] && r.images[0].url)?r.images[0].url:
												(r.images[2] && r.images[2].url)?r.images[1].url:NO_ALBUM_PIC,
							album_id : r.id
						}
				
						
				$albums.push(items);
			});
			
			$page = {next:response.next,prev:response.previous};
			$obj = {items:$albums,page:$page};
			
//			console.log($albums)
			return $obj;
		},
		
		//Track response
		trackResponse : function(response){

			var data = response.items || [];
			if(!data.length) return false;
			
			var $tracks = [];
			angular.forEach(data,function(r){

				var $obj = {
						
						track_name : r.name,
						track_id : r.id,
						track_url : r.preview_url
				}
				$tracks.push($obj);
			});
			
			return $tracks;
		}
	
	};
		
}();
