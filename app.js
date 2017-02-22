var app = angular.module('techApp', []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http){

	$scope.warren = {
		name: 'Warren Buffett',
		email: 'email@email.com'
	};

}])

app.directive('wishlist', function() {
	return {
		scope: {
			'contactInfo': '=wishlist'
		},
		template: "<span>{{contactInfo.name}}</span>",
		restrict: 'A'
	}
})


