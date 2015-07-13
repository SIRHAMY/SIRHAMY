angular.module('sirhamy', ['ngRoute', 'phantSaver']);

angular.module('sirhamy').config( function($routeProvider) {
	$routeProvider
		.when('/main', {
			 templateUrl: 'views/main.html',
			 controller: 'MainCtrl',
			 controllerAs: 'control'
		})
		.when('/phantsaver', {
			templateUrl: 'modules/phantsaver-p5/phantsaver.html',
			controller: 'PhantSaverCtrl',
		}) 
		.otherwise({
		 		redirectTo: '/main'
		});
})

angular.module('phantSaver', []);