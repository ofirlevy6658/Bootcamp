const obj = {
	name: "yaaaaaaaaaaaaaaa",
	print() {
		console.log(this.name);
	},
	printDealy() {
		setTimeout(() => {
			console.log(this.name);
		}, 1000);
	},
};

obj.print();
obj.printDealy();
