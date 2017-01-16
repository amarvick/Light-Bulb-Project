var myApp = angular.module("myApp", []);

var baseURL = "http://192.168.0.28:3000/";

myApp.controller("formController", function($scope, $http) {

	$scope.switchValue = function(value) {

		var onOffURL = baseURL + value;

		$http.post(onOffURL).then(function(response) {
			alert("The lamp has turned " + value);
		}, function(error) {
			alert("Response Unsuccessful...");
		});
	}

	$scope.switchColor = function(colorValue) {

		var colorURL = baseURL + "color/" + colorValue;

		$http.post(colorURL).then(function(response) {
			alert("The lamp has turned in to the color: " + colorValue);
		}, function(error) {
			alert("Response Unsuccessful...");
		});
	}

	$scope.switchPattern = function(patternValue) {

		var data = {
				"mode": patternValue,
				"speed":100
			};

		var patternURL = baseURL + "pattern";

		$http.post(patternURL, data).then(function(response) {
			alert("The lamp is undergoing pattern " + patternValue);
		}, function(error) {
			alert("Response Unsuccessful...");
		});

	}

})