class Slingshot {
	constructor(bodyA, pointB) {
		var options = {
			bodyA: bodyA,
			pointB: pointB,
			stiffness: 0.04,
			length: 10,
		};
		this.pointB = pointB;
		this.sling = Constraint.create(options);
		World.add(world, this.sling);
	}
	attach(body) {
		this.sling.bodyA = body;
		Matter.Body.setPosition(body, {x: 300, y: 500});
		Matter.Body.setVelocity(body, {x: 0, y: 0});
	}

	fling() {
		this.sling.bodyA = null;
	}

	display() {
		if (this.sling.bodyA) {
			var pointA = this.sling.bodyA.position;
			var pointB = this.pointB;
			push();

			stroke(48, 22, 8);
			line(pointA.x, pointA.y, pointB.x, pointB.y);
			pop();
		}
	}
}
