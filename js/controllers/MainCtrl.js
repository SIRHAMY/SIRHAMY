angular.module('sirhamy').controller('MainCtrl', function() {

	this.connectHover = function() {

      //HAMYChange
      console.log("IsConnectEnabled?" + this.connectEnabled);

		this.connectEnabled = true;
		
		//HAMYChange		
		console.log("Hovered");
      console.log("..Connect enabled?" + this.connectEnabled);
	};

	this.connectClick = function() {
		console.log("Clicked");
	}
});