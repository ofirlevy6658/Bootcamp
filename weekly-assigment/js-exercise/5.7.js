const shortest = (str) => {
	let arr = str.split(" ");
	let short = arr.reduce((acc, current) => {
		return current.length < acc.length ? current : acc;
	});
	return short.length;
};
// test
console.log(shortest("what is the shortest string here?"));
console.log(shortest("a vvddvd dad shordtdsaest stdsaring daads?"));
