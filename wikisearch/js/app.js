var app = angular.module('app', []);

app.controller('wikiCtrl', function($scope, $http) {

	$scope.search = "Chris"

	$scope.$watch('search', function() {
  		fetch();
	});

	function fetch() {
		$http.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' +
			$scope.search + '&limit=1&namespace=0&format=json'
		).then(function(response) {
			console.log(response.data);
		});

	}

});