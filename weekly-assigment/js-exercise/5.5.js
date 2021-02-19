const cut = (str) => {
	arr = str.split(" ");
	return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
};

//test
console.log(cut("Ofir levy"));
console.log(cut("Sam Harris"));
console.log(cut("Patrick Feeney"));
