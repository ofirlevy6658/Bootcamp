function busStaion(arr) {
	let sumOnBus = 0;
	arr.forEach((el, index) => {
		index % 2 === 0 ? (sumOnBus += el) : (sumOnBus -= el);
		if (sumOnBus < 0) throw "error minus ppl";
	});
	return sumOnBus;
}
console.log(busStaion([1, 1, 3, 3]));
console.log(busStaion([1, 1, 4, 3, 1, 2, 3, 3, 3, 1, 1, 1]));
