let ball;

function setup() {
	new Canvas("fullscreen"); //can change to "fullscreen" and remove display mode and itll still work
	// displayMode('centered'); //related to canvas 'fullscreen','pixilated'

	world.gravity.y = 10;

	ball = new Sprite(); //sprite; something that represents sumn
	ball.diameter = 50;
	ball.bounciness = .9;
	// ball.image = "⚽";

	paddle = new Sprite(250,600,100,20,"kinematic"); //"kinematic" means it interacts with other sprites
	
	walls = new Sprite(width/2,height/2,width,height,"static");
	walls.shape = 'chain';

	ball.collides(walls, hitWall);
}

function hitWall(balls, walls) {
	ball.diameter += 10;
}
function draw() {
	background('skyblue');
	// paddle.rotation = 40; //this is a property
	// paddle.rotate(20,3); // a function
	paddle.x = mouseX;

	if (ball.y >= height-ball.height) {
		ball.y = -100;
		ball.vel.y = 0;
	}

}
