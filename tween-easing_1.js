// Constructor
TweenApp = function()
{
	.....;
}

// Subclass Sim.App
TweenApp.prototype = new Sim.App();

// Our custom initializer
TweenApp.prototype.init = function(param)
{
	// Call superclass init code to set up scene, renderer, default camera
	Sim.App.prototype.init.call(this, param);
	
    // Create a point light to show off the MovingBall
	var light = new THREE.PointLight( 0xffffff, 1, 100);
	light.position.set(0, 0, 20);
	this.scene.add(light);
	
	this.camera.position.z = 13;
	
    // Create the MovingBall and add it to our sim
    var movingBall = new MovingBall();
    movingBall.init();
    this.addObject(movingBall);
    
    this.movingBall = movingBall;
}

TweenApp.prototype.update = function()
{
    TWEEN.update();

	Sim.App.prototype.update.call(this);
    
}

TweenApp.prototype.handleMouseUp = function(x, y)
{
	this.movingBall.animate();
}

// Custom MovingBall class
MovingBall = function()
{
...
}

MovingBall.prototype = ....;

MovingBall.prototype.init = function()
{
....
}

MovingBall.prototype.animate = function()
{	
.....

}

MovingBall.useBounceFunction = false;

