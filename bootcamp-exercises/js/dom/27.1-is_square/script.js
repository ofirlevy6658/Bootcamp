function Square(a, b, c, d) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
}
Square.prototype.isSquare = function () {
	return ((this.a == this.b) == this.c) == this.d;
};
const square1 = new Square(1, 2, 3, 4);
const square2 = new Square(1, 1, 1, 1);
console.log(square1.isSquare());
console.log(square2.isSquare());
