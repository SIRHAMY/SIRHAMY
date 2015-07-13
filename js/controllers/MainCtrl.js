angular.module('sirhamy').controller('MainCtrl', function() {

	this.connectHover = function() {
		this.connectEnabled = true;
	};

	this.connectClick = function() {
		console.log("Clicked");
	}
});