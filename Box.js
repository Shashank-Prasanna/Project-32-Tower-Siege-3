class Box extends BaseClass {
	constructor(x, y, width, height) {
		super(x, y, width, height);
	}

	display() {
		if (this.body.speed > 9) {
			World.remove(world, this.body);
		} else {
			super.display();
		}
	}
}
