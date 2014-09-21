/*
 * Index page controller file
 * */

TurnerAppCtrller.controller('artistCtrl',['$rootScope','$scope','tModal','$window',function($rootScope,$scope,tModal,$window){

	var Artist = function(){
		
		function init(){
			$scope.artists = [];
			$rootScope.home = false;
			$rootScope.labels = Labels;
			$rootScope.favlists();
			$scope.url = ServiceUrls.search;
			$scope.searchArtist = searchArtist;
			
			//callback function to paginate
			$scope.paginate = function(e){

				e.preventDefault();
				var url = $(e.currentTarget).attr('data-page');

				if(url){
					$scope.url = url;
					searchArtist();
				}
					
			}
		}
		
		function searchArtist(e){
			
			var searchQuery = $('#search-query').val();
			var params = {};
			
			function UICallback($obj){
				$('.search-box.abs-center').addClass('no-abs-center');
				$('.navs').removeClass('hide');
				
				$scope.artists = $obj.data;
				$scope.page = $obj.page;
			}
			
			if(e != undefined)
				params = {q:searchQuery,type:'Artist'};
			
			tModal.init(ServiceActions.search,$scope.url,UICallback,params);

		}
		
		return{
			start : init
		};
	}();
	
	angular.element(document).ready(function () {
		Artist.start();
	});


}]);