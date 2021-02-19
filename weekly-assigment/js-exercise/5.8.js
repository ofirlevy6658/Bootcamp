const longest = (str) => {
	let arr = str.split(" ");
	let short = arr.reduce((acc, current) => {
		return current.length > acc.length ? current : acc;
	});
	return short.length;
};
// test
console.log(longest("what is the shortest string here?"));
console.log(longest("a vvddvd dad shordtdsaest stdsaring daads?"));
