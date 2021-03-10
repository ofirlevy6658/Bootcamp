//1

var b = 1;
function someFunction(number) {
	function otherFunction(input) {
		return b;
	}
	b = 5;
	return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//  b is global variable hence when we change the value to 5 in function without declare the value of the global b will change to 5

var a = 1;
function b2() {
	a = 10;
	return;
	function a() {}
}
b2();
console.log(a);

//

let i;
for (i = 0; i < 3; i++) {
	const log = () => {
		console.log(i);
	};
	setTimeout(log, 0);
}
// its finish the for loop and then start to print so it will print 3

function funcB() {
	let a = (b = 0);
	a++;
	return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
