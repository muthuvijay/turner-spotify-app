/*
 * Tracks page controller file
 * */

TurnerAppCtrller.controller('trackCtrl',['$rootScope','$scope','$routeParams','tModal','$window',function($rootScope,$scope,$routeParams,tModal,$window){

	var Tracks = function(){
		
		function init(){
			$scope.tracks = [];
			$rootScope.home = true;
			$rootScope.labels = Labels;
			$rootScope.favlists();
			loadTrackData($routeParams.albumId);

			$scope.play = function(e){
				e.preventDefault();
				var target = $(e.currentTarget);
				var url = target.attr('data-url');
				if(url){

					$('#audio-player').attr('src',url);
					//play
					$('#audio-player').get(0).play();
				}else{
					console.log('No play url found!');
				}
				
			}
		}
		
		function loadTrackData($albumId){
			
			function UICallback($obj){
				
				console.log($obj);			
				$scope.tracks = $obj.data;
			}
			
			var params = {};
			var url = ServiceUrls.tracks.replace('{%id%}',$albumId);
			
			tModal.init(ServiceActions.tracks,url,UICallback,params);

		}
		
		
		return{
			start : init
		};
	}();
	
	angular.element(document).ready(function () {
        Tracks.start();
	});
	

}]);