class BaseClass {
	constructor(x, y, width, height, angle) {
		var options = {
			restitution: 0.8,
			density: 0.5,
			friction: 0.05,
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		World.add(world, this.body);
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
	}
	display() {
		Matter.Body.setAngle(this.body, 0);
		push();
		translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER);
		fill(this.r, this.g, this.b);
		rect(0, 0, this.width, this.height);
		pop();
	}
}
