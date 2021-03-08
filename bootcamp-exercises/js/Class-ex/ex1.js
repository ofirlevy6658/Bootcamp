class Animal {
	constructor(name, sound) {
		this._name = name;
		this._sound = sound;
	}
	get name() {
		return this._name;
	}
	get sound() {
		return this._sound;
	}
	print() {
		console.log(`Im ${this.name} and I Do ${this.sound}}`);
	}
}

const ani = new Animal("sheep", "Meee");
console.log(ani.name);
console.log(ani.sound);
ani.print();
