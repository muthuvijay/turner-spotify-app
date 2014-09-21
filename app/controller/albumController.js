/*
 * Album page controller file
 * */

TurnerAppCtrller.controller('albumCtrl',['$rootScope','$scope','$routeParams','tModal','$window',function($rootScope,$scope,$routeParams,tModal,$window){

	var Albums = function(){
		
		function init(){
			$scope.albums = [];
			$rootScope.home = true;
			$rootScope.labels = Labels;
			$rootScope.favlists();
			
			var $artistId = $routeParams.artistId;
			$scope.url = ServiceUrls.albums.replace('{%id%}',$artistId);
			
			loadAlbumData();
			//loadInitialData();
		
			$scope.paginate = function(e){
//				console.log(e)
				e.preventDefault();
				var url = $(e.currentTarget).attr('data-page');
				
				if(url){
					$scope.url = url;
					loadAlbumData();
				}
					
			}
		}
		
		function loadAlbumData(){
			
			function UICallback($obj){
				
				console.log($obj);			
				$scope.albums = $obj.data;
				$scope.page = $obj.page;
			}
			
			var params = {};
			
			
			tModal.init(ServiceActions.albums,$scope.url,UICallback,params);

		}
		
		
		return{
			start : init
		};
	}();
	
	angular.element(document).ready(function () {
		Albums.start();
	});

	

}]);