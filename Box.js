class Box extends BaseClass {
	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.destroyed = false;
	}

	display() {
		if (this.body.speed > 10 && this.destroyed === false) {
			World.remove(world, this.body);
			score = score + 200;
			this.destroyed = true;
		} else if (this.destroyed === true) {
			//Foo
		} else {
			super.display();
		}
	}
}
