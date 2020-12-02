class Rectangle {
	constructor(x, y) {
		var options = {
			restitution: 1.0,
			friction: 1.0,
			density: 0.5,
			isStatic: false,
		};
		this.width = 30;
		this.height = 30;
		//this.image = loadImage('polygon.png');
		this.body = Bodies.rectangle(x, y, 30, 30, options);
		World.add(world, this.body);
	}

	move() {
		Matter.Body.setPosition(this.body, {x: mouseX, y: mouseY});
	}

	display() {
		Matter.Body.setAngle(this.body, 0);
		push();
		translate(this.body.position.x, this.body.position.y);
		fill(255);
		rectMode(CENTER);
		rect(0, 0, this.width, this.height);
		pop();
		console.log('polygon');
	}
}
