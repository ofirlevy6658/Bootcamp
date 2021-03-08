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

class PointWorld {
	constructor() {
		this.pointArr = [];
	}

	sortByY() {
		const sorted = [...this.pointArr];
		sorted.sort((a, b) => (a.y > b.y ? -1 : a.y < b.y ? 1 : 0));
		return sorted;
	}
	uniquePoints() {
		return [...new Set(this.pointArr)];
	}
	sumX() {
		return this.pointArr.reduce((acc, current) => current.x + acc.x);
	}
	findPoint(p) {
		const find = this.pointArr.find(
			(point) => point.x == p.x && point.y == p.y
		);
		if (find) return true;
		return false;
	}
}

const p1 = new Point(4, 5);
const p2 = new Point(8, 7);
const p3 = new Point(55, 555);
const pointArr = new PointWorld();
pointArr.pointArr.push(p1);
pointArr.pointArr.push(p2);
console.log(pointArr.findPoint(p3));
console.log(pointArr.sumX());
pointArr.pointArr.push(p3);
console.log(pointArr.sortByY());
