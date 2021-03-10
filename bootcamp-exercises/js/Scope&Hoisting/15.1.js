// function funcA() {
// 	var a = 1;
// 	console.log(foo());
// 	console.log(a);
// 	function foo() {
// 		return 2;
// 	}
// }
// funcA(); //we try to print a before its init

// var fullName = "John Doe";
// var obj = {
// 	fullName: "Colin Ihrig",
// 	prop: {
// 		fullName: "Aurelio De Rosa",
// 		getFullName: function () {
// 			return this.fullName;
// 		},
// 	},
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

function funcB() {
	let b;
	let a = (b = 0);
	a++;
	return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// a and b are bloked level you dont have access to them from the global

function funcC() {
	console.log("1");
}
funcC();
function funcC() {
	console.log("2");
}
funcC(); // its go from top to bot so the first function will never run we need to change the name of one function

//5
function funcD1() {
	let d = 1;
}
funcD1();
// console.log(d);
function funcD2() {
	var e = 1;
}
funcD2();
console.log(); // d is not init with variable and you can log d out side the function because its blocked variable the same about e

//6

function funcE() {
	console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// var f is located under the funcE so the func cant see it if it was init before the funcE u could use it
