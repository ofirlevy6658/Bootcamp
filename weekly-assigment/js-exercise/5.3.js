const toCamelCase = (str) => {
	let arr = str.split("_").join("").split("-");
	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	return arr.join("");
};

//test
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
