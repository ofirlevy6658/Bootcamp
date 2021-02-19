const maskify = (str) =>
	str.length > 4 ? "#".repeat(str.length - 4) + str.slice(str.length - 4) : str;

//test
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
