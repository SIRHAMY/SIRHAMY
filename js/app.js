angular.module('sirhamy', ['ngRoute']);

angular.module('sirhamy').config( function($routeProvider) {
	$routeProvider
		.when('/main', {
			 templateUrl: 'views/main.html',
			 controller: 'MainCtrl',
			 controllerAs: 'control'
		})
		.otherwise({
		 		redirectTo: '/main'
		});
})