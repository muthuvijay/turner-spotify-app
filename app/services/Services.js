//Factory method to provide services
var app = angular.module('Turner.services',[]);

app.factory('tServices',['$http','$q',function($http,$q){
	return function(){
	var $fileUrl,
		$method,
		$action,$params;
	
	function invoke(sCallback,eCallback){
	
		$http.get($fileUrl,{params:$params})
			.success(function(data){sCallback($action,data)})
			.error(function(data){sCallback($action,data)});
		return;
	}
	
	
	return{
		call : function(sCallback,eCallback){
			invoke(sCallback,eCallback);
		},
		setFileUrl : function(url){
			$fileUrl = url;
		},
		setAction : function(action){
			$action = action;
		},
		setParams : function(params){
			$params = params;
		}
	}
	
	}
}]);
