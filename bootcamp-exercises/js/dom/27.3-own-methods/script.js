//filter
Array.prototype.myFilter = function (callback) {
	arrFilter = [];
	for (let i of this) {
		if (callback(i)) arrFilter.push(i);
	}
	return arrFilter;
};

function func(el) {
	return el > 5;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let fil = arr.myFilter(func);
console.log(fil);

//find
Array.prototype.myFind = function (callback) {
	for (let i of this) {
		if (callback(i)) return i;
	}
};
fil = arr.find(func);
console.log(fil);
