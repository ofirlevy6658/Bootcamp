//filter
const filter = (arr, callback) => {
	const arrFilter = [];
	for (let i of arr) {
		if (callback(i)) arrFilter.push(i);
	}
	return arrFilter;
};

//test filter
const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(filter(arrTest, (element) => element % 2 === 0));

//forEach
const forEach = (arr, callback) => {
	for (let i of arr) {
		callback(i);
	}
};

//test forEach
const testArr = ["a", 1, "!"];
forEach(testArr, (el) => console.log(el));

//map
const map = (arr, callback) => {
	arrMap = [];
	for (let i of arr) {
		arrMap.push(callback(i));
	}
	return arrMap;
};

//map test
console.log(map(arrTest, (el) => el * 3));
