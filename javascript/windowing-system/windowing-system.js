// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
	constructor(width = 80, height = 60) {
		this.width = width;
		this.height = height;
	}

	resize(newWidth, newHeight) {
		this.width = newWidth;
		this.height = newHeight;
	}
}

const size = new Size();
console.log('That is size:::', size);
size.resize(1920, 1080);
console.log('That is size:::', size);

export class Position {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	move(newX, newY) {
		this.x = newX;
		this.y = newY;
	}
}

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	resize(newSize) {
		const maxWidth = this.screenSize.width - this.position.x;
		const maxHeight = this.screenSize.height - this.position.y;

		const width = Math.min(Math.max(newSize.width, 1), maxWidth);
		const height = Math.min(Math.max(newSize.height, 1), maxHeight);

		this.size.resize(width, height);
	}

	move(position) {
		const maxX = this.screenSize.width - this.size.width;
		const maxY = this.screenSize.height - this.size.height;

		const x = Math.min(Math.max(position.x, 0), maxX);
		const y = Math.min(Math.max(position.y, 0), maxY);

		this.position.move(x, y);
	}
}

export function changeWindow(programWindow) {
	const newSize = new Size(400, 300);
	const newPosition = new Position(100, 150);

	programWindow.resize(newSize);
	programWindow.move(newPosition);

	return programWindow;
}
