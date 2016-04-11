'use strict';
var parcelTrackerApp = angular.module('parcelTrackerApp', []);

parcelTrackerApp.controller('parcelTrackerController', ['$scope', '$http', function($scope, $http){
	$scope.parcel_id;
	$scope.selected_carrier;
	$http.get('carriers.json').success(function(data){
		$scope.carriers = data;
	});
	$scope.emptyForm = function(){
		return !$scope.selected_carrier || $scope.selected_carrier == "" || !$scope.parcel_id || $scope.parcel_id == "";
	};
	$scope.track = function(){
		window.open($scope.carriers[$scope.selected_carrier].url + $scope.parcel_id);
	};
}]);
