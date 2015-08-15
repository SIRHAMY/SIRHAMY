angular.module('sirhamy', ['ngRoute', 'projects']);

angular.module('sirhamy').config( function($routeProvider) {
	$routeProvider
		.when('/main', {
			 templateUrl: 'views/main.html',
			 controller: 'MainCtrl',
			 controllerAs: 'control'
		})
		//--------------Projects-----------------
		.when('/phantsaver', {
			templateUrl: 'projects/phantsaver-p5/phantsaver.html',
			controller: 'PhantSaverCtrl',
		}) 
		.when('/splink', {
			templateUrl: 'projects/splink/splink.html',
			controller: 'splinkCtrl'
		})
		.otherwise({
		 		redirectTo: '/main'
		});
})

angular.module('projects', []);