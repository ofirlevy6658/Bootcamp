const binary = (arr) => {
	let sum = 0;
	arr = arr.reverse();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) sum += 2 ** i;
	}
	return sum;
};

console.log(binary([0, 1, 1, 0]));
