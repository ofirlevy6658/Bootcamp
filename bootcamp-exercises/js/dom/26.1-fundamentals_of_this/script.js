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
// the arrow function go to other scope to for this
// to fix that we can use normal function
const myObj2 = {
	name: "Timmy",
	greet() {
		console.log(`Hello ${this.name}`);
	},
};
myObj2.greet();

//3
// this will point to the window becase we call it from the global scope
const myFuncDec = function () {
	console.log(this);
};
myFuncDec();
//4
//this will also point to the window
const myFuncArrow = (name) => {
	name = 3;
	console.log(this);
};
myFuncArrow();

//5
//the problem is when we use arrow function its go to outer scope and will not find the this of the element.
//we can fix this by change the function to normal and not arrow
document.querySelector(".element").addEventListener("click", func);

function func() {
	console.log(this);
}
