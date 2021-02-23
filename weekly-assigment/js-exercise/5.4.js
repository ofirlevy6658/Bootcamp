const toWeirdCase = (str) => {
	let arr = str.split("");
	arr = arr.map((el, index) =>
		index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
	);
	return arr.join("");
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
