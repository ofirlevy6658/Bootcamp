//1
console.log(this);
// this refers to the Global object.
// window the Global object is [object Window]In a browser

//2
const myObj = {
	name: "Timmy",
	greet: () => {
		console.log(`Hello ${this.name}`);
	},
};
myObj.greet();
// the problem is when u using arrow function in object
// the this cant find the propreties the arrow function create his own closure
// to fix that we can use normal function
const myObj2 = {
	name: "Timmy",
	greet() {
		console.log(`Hello ${this.name}`);
	},
};
myObj2.greet();

//3
//this will point to the global function object
const myFuncDec = function () {
	console.log(this);
};
myFuncDec();
//4
const myFuncArrow = (name) => {
	name = 3;
	console.log(this);
};
myFuncArrow();

//5
document.querySelector(".element").addEventListener("click", func);

function func() {
	console.log(this);
}
