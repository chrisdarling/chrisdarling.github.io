var app = angular.module('app', []);



app.controller('quoteCtrl', function($scope, $http) {

	


	 $http({
        method: 'JSONP',
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        params: {
            _jsonp: 'JSON_CALLBACK'
        }
    }).then(function (response) {
        console.log(response.data[0].content);
    });
});