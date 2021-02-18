const trim = (str) => {
	str = str.split("");
	str.splice(0, 1);
	str.splice(str.length - 1);
	return str.join("");
};

console.log(trim("trim"));
