//custom plugins
//localStorage
  	  	
var LocalStorage =function (){
	var storage = window.localStorage || {};
	var artists = 'artists',
		albums = 'albums',
		tracks = 'tracks',
		favs = 'favorites';
	
	return{
		
		setItem : function(key,value){
			storage.setItem(key,JSON.stringify(value));
		},
		
		getItem : function(key){
			return JSON.parse(storage.getItem(key));
		},
		
		isItemExists : function(key){
			return (this.getItem(key))?1:0;
		},
		
		clearItem : function(key){
			if(this.isItemExists(key)){
				delete storage[key];
			}
		},
		
		isFavExists : function(mode,item){
			if(this.isItemExists(favs)){
				var favorites = this.getItem(favs);
				if(favorites[mode] != undefined){
					return (favorites[mode][item])?1:0;
				}
			}
			return false;
		}, 
		

		isAlbumExists : function(item){
			return this.isFavExists(albums,item);
		}, 
		
		isArtistExists : function(item){
			return this.isFavExists(artists,item);
		}, 
		
		isTrackExists : function(item){
			return this.isFavExists(tracks,item);
		}, 
		
		setFavorites : function(value){
			storage.setItem(favs,JSON.stringify(value));
		},
		
		getFavorites : function(){
			return JSON.parse(storage.getItem(favs));
		}
	};
	
}();
  	  	
