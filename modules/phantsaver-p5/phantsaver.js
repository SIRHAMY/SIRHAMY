angular.module('phantSaver').controller('PhantSaverCtrl', function($scope) {

	//Start PHantSaver
	var sketch = function(phant) {

		var url;
		var myCanvas;
		var counter = 0;
		var startingAngle=7;
		var goRight = true;
		var startUp = true;
		var myFrameRate = 30;
		var running = true;

		phant.preload = function() {
			elephantHead = phant.loadImage("modules/phantsaver-p5/Resources/ElephantHead.png");
  			elephantTrunk = phant.loadImage("modules/phantsaver-p5/Resources/TrunkPart.png");
  			HucciSymbol = phant.loadImage("modules/phantsaver-p5/Resources/HucciRoseGold.png");
		}

		phant.setup = function() {
			myCanvas = phant.createCanvas(screen.width, screen.height);
			phant.frameRate(myFrameRate);
		}

		phant.draw = function() {
			phant.background('#000000');

	  		phant.translate(screen.width/2, screen.height/2);  //Set origin to bottom of elephant head
  			phant.image(elephantHead,  -elephantHead.width/2, -elephantHead.height/2);  //Place elephantHead in center of screen
  
  			phant.swing(10);

	  		//Check if we should continue looping
	  		url = phant.getURL();
	  		if(url.indexOf('phantsaver') === -1) {

	  			phant.stopDraw();
	  			console.log(document.getElementById("defaultCanvas"));
	  			document.getElementById("defaultCanvas").remove();
	    				  			
	  			console.log("URLChange");
	  		}

		} 

		phant.swing = function(travelTime)
		{
			  var xVal =  - (elephantTrunk.width/2) + elephantTrunk.width/8;
			  var yVal =  (elephantHead.height/20);
			  
			  if(counter===0 && startUp===true)
			  {
			    phant.rotate(phant.radians(startingAngle));
			    startUp = false;
			  }
			  
			  //Place trunk on screen and determine rotation degree
			  for(var i = 0; i< 11; i++)
			  {
			    if(goRight) phant.rotate(phant.radians(startingAngle- 2*startingAngle*( counter/(travelTime*myFrameRate))));
			    else phant.rotate(phant.radians(-startingAngle+2*startingAngle*( counter/(travelTime*myFrameRate))));
			    
			    if(i<10) phant.image(elephantTrunk, xVal, yVal + elephantTrunk.height*i * 1.2);
			    else phant.image(HucciSymbol, xVal - 10, yVal + elephantTrunk.height*i * 1.3);  
			  }
			  
			  counter++;
			  
			  //End condition for trunk travel
			  if(counter=== (travelTime*myFrameRate))
			  {
			    counter = 0;
			    goRight = !goRight;
			  }
		}

		phant.mouseClicked = function() {
			if(running) phant.stopDraw();
			else phant.startDraw();
		}

		phant.stopDraw = function() {
			phant.noLoop();
			running = false;
		}

		phant.startDraw = function() {
			phant.loop();
			running = true;
		}
	}

	var myP5 = new p5(sketch);

});
