const duplicates = (str) => {
	let arr = str.toLowerCase().split("");
	let findDuplicates = arr.filter((el, index) => arr.indexOf(el) != index);
	let set = [...new Set(findDuplicates)];
	return set.length;
};

//test
console.log(duplicates("indivisibility"));
console.log(duplicates("Indivisibilities"));
console.log(duplicates("aA11"));
console.log(duplicates("abcde"));
