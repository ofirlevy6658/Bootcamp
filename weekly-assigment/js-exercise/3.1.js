const nb_year = (p0, percent, aug, p) => {
	let years = 0;
	while (p > p0) {
		p0 = p0 * (percent / 100 + 1) + aug;
		years++;
	}
	return years;
};

//test
console.log(nb_year(1000, 2, 50, 5000));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
