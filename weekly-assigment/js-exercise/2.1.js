const sumLowest = (arr) => {
	const min = Math.min.apply(Math, arr);
	arr.splice(
		arr.findIndex((rank) => rank === min),
		1
	);
	return min + Math.min.apply(Math, arr);
};

console.log(sumLowest([1, 2, 3, 4]));
