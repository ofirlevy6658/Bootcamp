const fibonacci = (n) => {
	if (n === 0) return 1;
	if (n === -1) return 0;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

//test
console.log(fibonacci(5));
