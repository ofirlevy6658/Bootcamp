const numbers = [1, -5, 666, 2, 400, 11];

let sortNumbers = numbers.sort((a, b) => a - b);
console.log(sortNumbers);

let sortNumbers2 = numbers.sort((a, b) => b - a);
console.log(sortNumbers2);
