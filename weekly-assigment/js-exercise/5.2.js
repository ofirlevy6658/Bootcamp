const repeatStr = (num, str) => {
	let multiStr = "";
	for (let i = 0; i < num; i++) {
		multiStr += str;
	}
	return multiStr;
};
//test
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
