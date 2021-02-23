const trim = (str) =>
	str
		.split("")
		.splice(1, str.length - 1)
		.join("");

//test
console.log(trim("trim"));
