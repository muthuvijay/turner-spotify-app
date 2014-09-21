//Factory method to provide services
var modal = angular.module('Turner.modal',['Turner.services']);

modal.factory('tModal',['tServices',function(tServices){
	
	var uicallback = {}; //callback holder
	function getData(action,url,callMethod,params){

		if(uicallback[action] == undefined){
			uicallback[action] = {};
		}
		
		uicallback[action] = callMethod;
		
		//init service call
		var ts = new tServices();
		ts.setFileUrl(url);
		ts.setAction(action);
//		if(params)
		ts.setParams(params);
		ts.call(successCallback,errorCallback);
		
	}
	
	function successCallback(callbackAction,response){
		var $returnObj = {}
		//console.log(callbackAction)
		switch(callbackAction){
		
		case ServiceActions.search:
			var obj = JSONParser.searchResponse(response);
			$returnObj = {'data' : obj.items,'page':obj.page};
			
			break;
		
		case ServiceActions.albums:
			var obj = JSONParser.albumResponse(response);
			$returnObj = {'data' : obj.items,'page':obj.page};
			
			break;	

		case ServiceActions.tracks:
			$returnObj = {'data' : JSONParser.trackResponse(response)};
			
			break;
			
		default:

			break;
		}
		
		uicallback[callbackAction].call(this,$returnObj);
	}
	
	function errorCallback(action,response){
		console.error('******** Error Happended with service ['+action+'] ********');
		console.log(response);		
	}
	
	return{
		init : function(action,url,uicallback,p){
			getData(action,url,uicallback,p);
			
		}
	};
	
	
}]);

