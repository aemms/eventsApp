var app = angular.module('eventsApp',['ngRoute','ngResource']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'eventCtrl'
		})
		.when('/about', {
			templateUrl: 'about.html'
		});
});

app.factory('eventService', function($resource){
	return $resource('./api/events');
});

app.controller('eventCtrl',function($scope, $http, eventService){
	$scope.events = [];
	$scope.newEvent = { title: '', venue:'', user:'', timestamp:''};

	$scope.events = eventService.query();

	$scope.post = function(){
		$scope.newEvent.timestamp = Date.now();

		eventService.save($scope.newEvent, function(){
			$scope.events.push($scope.newEvent);
			$scope.newEvent = { title: '', venue:'', user:'', timestamp:''};
		});		
	};
});