/**
 * 
 * Custom directive to add favorites 
 */

TurnerSpotifyApp.directive('favorites',['$rootScope', function($rootScope) {
	  return {
	      restrict: 'AE',
	      replace: 'true',
	      template: '<a class="favs" href="#"><i class="fa fa-star"></i>Add to Favorites</a>',
	      link: function(scope, elem, attrs) {
	    	  
	          elem.bind('click', function(e) {
	        	  e.preventDefault();
	            var fav = $('#favorites');
	            var headNode = elem.closest('li');
	            if(attrs.type)
	            {
	            	switch(attrs.type){
	            	
	            		case "album":
	            			var key = attrs.type+'_'+attrs.albumid;
//	            			var text = headNode.find('figcaption').text();
	            			if(!LocalStorage.isAlbumExists(key)){
	            				var text = headNode.find('figcaption').text();
	            				$rootScope.Favs.albums[key]= text;
		            			
		            			fav.find('.albums ul').append("<li>"+text+"<i class='fa fa-times-circle'></i><li>");
		            			
	            			}else{
	            				return false;
	            			}
	            			
	            			
	            		break;
	            		
	            		case "artist":
	            			var key = attrs.type+'_'+attrs.artistid;
	            			
	            			if(!LocalStorage.isArtistExists(key)){
	            				var text = headNode.find('figcaption').text();
	            				$rootScope.Favs.artists[key]= text;
		            			
		            			fav.find('.artists ul').append("<li>"+text+"<i class='fa fa-times-circle'></i><li>");
		            			
	            			}else{
	            				return false;
	            			}
	            			
	            		break;
	            		
	            		case "track":
	            			var key = attrs.type+'_'+attrs.trackid;
	            			if(!LocalStorage.isTrackExists(key)){
	            				var text = headNode.find('.track').text();
	            				$rootScope.Favs.tracks[key]= text;
	            					
		            			fav.find('.tracks ul').append("<li>"+text+"<i class='fa fa-times-circle'></i><li>");
		            			
	            			}else{
	            				return false;
	            			}
	            			
	            		break;
	            	
	            	}
	            	
	            	LocalStorage.setFavorites($rootScope.Favs);
	            }
	            
	            
	          });
	        }
	  };
	}]);

