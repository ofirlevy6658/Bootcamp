const longest = (str1, str2) => {
	const aplhaBeta = new Set();
	const arr = [...str1.split(""), ...str2.split("")];
	arr.forEach((el) => aplhaBeta.add(el));
	return [...aplhaBeta].sort().join("");
};

//test
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
	longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
