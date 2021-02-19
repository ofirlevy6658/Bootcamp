const findUniq = (arr) => {
	arr.sort();
	return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
};

console.log(findUniq([1133, 1133, 1133, 2, 1133, 1133]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
