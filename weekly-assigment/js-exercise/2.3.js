const findNextSquare = (num) => {
	return Number.isInteger(num ** 0.5) ? (num ** 0.5 + 1) ** 2 : -1;
};

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
