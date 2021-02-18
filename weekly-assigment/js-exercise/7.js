const filter = (arr, callback) => {
	const arrFilter = [];
	console.log(arr);
	for (let i of arr) {
		if (callback(i)) arrFilter.push(i);
	}
	return arrFilter;
};

const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(filter(arrTest, (element) => element % 2 === 0));
