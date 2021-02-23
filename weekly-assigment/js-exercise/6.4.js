const isIsogram = (str) => {
	arr = str.toLowerCase().split("");
	let findDuplicates = arr.filter((el, index) => arr.indexOf(el) != index);
	if (findDuplicates.length > 0) return false;
	return true;
};

//test
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
