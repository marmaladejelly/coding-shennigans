let playe;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 10;


	player = new Sprite(100,100,32,23);
	player.color = "pink";
	player.diameter = 50;

	walls = new group();
	walls.w = 50;
	walls.h = 50;
	walls.title = "="
	walls.collider = static;

}

function draw() {
	background('skyblue');

	if (mouse.presses()) {
		player
.speed = 10;
		player
.moveTo(mouse);
	}
}
