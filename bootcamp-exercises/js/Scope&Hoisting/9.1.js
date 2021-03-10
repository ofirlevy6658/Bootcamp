const isString = (str, callback) => {
	if (typeof str === "string") callback(str);
};

isString("test", (str) => console.log(str));
isString(123, (str) => console.log(str));

const firstWordUpperCase = (str, callback) => {
	const arr = str.split(" ");
	arr[0] = arr[0].toUpperCase();
	callback(arr);
};

firstWordUpperCase("this is a test", (arr) => {
	console.log(arr.join("-"));
});

firstWordUpperCase("this is a test", (arr) => {
	console.log(arr.join("*"));
});

//
const myCallback = (str, callback) => {
	if (typeof str === "string") callback(str);
};

myCallback("abcdefg", (str) => console.log(str.split("").reverse().join("")));
