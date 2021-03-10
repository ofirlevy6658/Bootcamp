const foods = ["falafel", "sabich", "hummus", "pizza with extra spineapple"];
console.log(foods.sort());
console.log(foods.sort().reverse());

const foodsWithUpperCase = [
	"falafel",
	"Sabich",
	"hummus",
	"pizza with extra pineapple",
];

console.log(
	foodsWithUpperCase.sort((a, b) => a.toLowerCase()[0] - b.toLowerCase()[0])
);

console.log(
	foodsWithUpperCase
		.sort((a, b) => a.toLowerCase()[0] - b.toLowerCase()[0])
		.reverse()
);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(words.sort((a, b) => a.length - b.length).reverse());
console.log(words.sort((a, b) => b.length - a.length).reverse());
