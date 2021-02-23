const binary = (arr) =>
	arr
		.reverse()
		.reduce((acc, current, index) => (current ? 2 ** index + acc : acc), 0);

//test
console.log(binary([0, 1, 1, 0]));
console.log(binary([0, 0, 0, 1]));
console.log(binary([0, 0, 1, 0]));
console.log(binary([0, 1, 0, 1]));
console.log(binary([1, 0, 0, 1]));
console.log(binary([1, 1, 1, 1]));
console.log(binary([1, 0, 1, 1]));
