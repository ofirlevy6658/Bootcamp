const basicOp = (op, num1, num2) => {
	switch (op) {
		case "+":
			return num1 + num2;
			break;
		case "-":
			return num1 - num2;
			break;
		case "*":
			return num1 * num2;
		case "/":
			return num1 / num2;
	}
};

//test
console.log(basicOp("-", 2, 3));
console.log(basicOp("/", 49, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));

//method 2
const basicOp2 = (op, num1, num2) => eval(num1 + op + num2);

console.log(basicOp2("-", 2, 3));
console.log(basicOp2("/", 49, 7));
console.log(basicOp2("-", 15, 18));
console.log(basicOp2("*", 5, 5));
