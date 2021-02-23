const fibonacci = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 0;
	if (n === 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
};

//test
console.log(fibonacci(7));
