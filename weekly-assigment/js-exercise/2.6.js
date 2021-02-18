const centuryFromYear = (year) =>
	year >= 0 ? Math.ceil(year / 100) : Math.floor(year / 100);

console.log(centuryFromYear(-155));
console.log(centuryFromYear(2155));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(1601));
