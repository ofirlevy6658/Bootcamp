const sumLowest = (arr) => {
	arr.sort((a, b) => a - b);
	return arr[0] + arr[1];
};

//test
console.log(sumLowest([1, 2, 3, 4]));
console.log(sumLowest([19, 5, 42, 2, 77]));
console.log(sumLowest([10, 343445353, 3453445, 3453545353453]));
