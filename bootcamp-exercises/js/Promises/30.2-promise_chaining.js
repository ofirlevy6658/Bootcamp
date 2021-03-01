function makeAllCaps(arr) {
	return new Promise((resolve, reject) => {
		resolve(
			arr.map((el) => {
				if (typeof el !== "string") reject("Only string allow");
				return el.toUpperCase();
			})
		);
	}).then((arr) => arr.sort());
}

makeAllCaps(["aa", "az", "b"])
	.then((answer) => console.log(answer))
	.catch((answer) => console.log(answer));

makeAllCaps(["aa", 3, "b"])
	.then((answer) => console.log(answer))
	.catch((answer) => console.log(answer));
