var app = angular.module('eventsApp',[]);

app.controller('eventCtrl',function($scope, $http){
	$scope.events = [];

	$scope.newEvent = { title: '', venue:'', user:'', timestamp:''};

	$http.get('/api/events').then(function(response){
		$scope.events = response.data;
	});
	$scope.post = function(){
		$scope.newEvent.timestamp = Date.now();

		$http.post('/api/events', $scope.newEvent).then(function(response){
			$scope.events.push(response.data);
			$scope.newEvent = { title: '', venue:'', user:'', timestamp:''};
		});		
	};
});