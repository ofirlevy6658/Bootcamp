const accum = (str) => {
	let mumbling = "";
	for (let i = 0; i < str.length; i++) {
		mumbling += "-" + str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
	}
	return mumbling.slice(1);
};

//test
console.log(accum("cwAt"));
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
