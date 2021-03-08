class Point {
	constructor(x, y) {
		this._x = x;
		this._y = y;
	}
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	addToX(x) {
		this._x += x;
	}
	addToY(y) {
		this._y += y;
	}
	set x(x) {
		this._x = x;
	}
	set y(y) {
		this._y = y;
	}
	addPoint(point) {
		this._x = point.x;
		this._y = point.y;
	}
	isSame(point) {
		return this._x == point.x && this._y == point.y ? true : false;
	}
	print() {
		console.log(`x:${this._x} y:${this._y}`);
	}
}

const p = new Point(4, 10);
const p2 = new Point(15, 10);
const p3 = new Point(15, 10);
console.log(p.isSame(p3));
console.log(p2.isSame(p3));
p.print();
