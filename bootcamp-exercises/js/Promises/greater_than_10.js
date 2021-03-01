function greater(num) {
	return new Promise(function (resolve, reject) {
		if (num > 10 && Number.isInteger(num))
			resolve("the number bigger than than 10");
		reject("somthing went wrong");
	});
}

greater(11)
	.then((answer) => console.log(answer))
	.catch((answer) => console.log(answer));
greater("a")
	.then((answer) => console.log(answer))
	.catch((answer) => console.log(answer));
greater(3)
	.then((answer) => console.log(answer))
	.catch((answer) => console.log(answer));
