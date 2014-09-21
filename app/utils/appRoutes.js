var TurnerSpotifyApp = angular.module("TurnerSpotifyApp",['ngRoute','TurnerAppCtrller']);

TurnerSpotifyApp.config(['$routeProvider',
                    function($routeProvider) {
                      
					$routeProvider.
                        when('/index', {
                          templateUrl: 'app/view/artist.html',
                          controller: 'artistCtrl'
                        }).
                        when('/artist/:artistId', {
                          templateUrl: 'app/view/albums.html',
                          controller: 'albumCtrl'
                        }).

                        when('/album/:albumId', {
                          templateUrl: 'app/view/tracks.html',
                          controller: 'trackCtrl'
                        }).                        
                        otherwise({
                          redirectTo: '/index'
                        });
                    }]);



TurnerSpotifyApp.run(['$rootScope',function($rootScope){

	//rootscope

	$rootScope.Favs = {artists:{},albums:{},tracks:{}};
	//console.log($rootScope.Favs);
	$rootScope.favlists = function(){

		$('#favorites ul').html(null);
		var favs = LocalStorage.getFavorites();
		angular.forEach(favs,function(items,key){
			
			console.log(items);
			$rootScope.Favs[key] = items;
			
			var cont = $('#favorites').find('.'+key+' ul');
			angular.forEach(items,function(text,id){
				cont.append("<li data-id='"+id+"'>"+text+"<i class='fa fa-times-circle'></i><li>");
			});
			
		});
		//console.log($rootScope.Favs);
	};
	
	
	//remove the favorites
	$('body').on('click','#favorites i', function(e){
		var target = $(e.currentTarget),
			parent = target.parent(),
			id = parent.attr('data-id'),
			key = target.closest('section').attr('class'),
			favs = LocalStorage.getFavorites();
		
		if(favs[key][id])
			delete favs[key][id];
		
		LocalStorage.setFavorites(favs);
			parent.remove(); //remove the clicked element
		});
}]);