class Car {
	constructor(brand, speed) {
		this._brand = brand;
		this._speed = speed;
	}
	get speed() {
		return this._speed;
	}
	get brand() {
		return this._brand;
	}
	print() {
		console.log(`this car is ${this.brand} and the speed is ${this.speed}`);
	}
	set speed(speed) {
		this._speed = speed;
	}
}
const cars = [
	new Car("Mercedes", 230),
	new Car("Ford", 180),
	new Car("BMW", 210),
	new Car("Audi", 180),
	new Car("infinity", 250),
];

const max = cars.reduce(function (prev, current) {
	return prev.y > current.y ? prev : current;
});
max.print();

cars.sort((a, b) => (a.speed < b.speed ? -1 : a.speed > b.speed ? 1 : 0));
console.log(cars);
