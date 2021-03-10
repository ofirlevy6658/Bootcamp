const israel = 10;
const japan = 126;
const uk = 66;

const percentageOfWorld1 = (population) =>
  Math.round((population / 7900) * 100 * 10) / 10;

function percentageOfWorld2(population) {
  return Math.round((population / 7900) * 100 * 10) / 10;
}

console.log(`the percentage of Israel populations is ${percentageOfWorld1(israel)} %  of the world population`);

console.log( `the percentage of japan populations is ${percentageOfWorld1(japan)} %  of the world population`);

console.log(`the percentage of uk populations is ${percentageOfWorld1(uk)} %  of the world population`);

// function expression
console.log('function expression')
console.log(`the percentage of Israel populations is ${percentageOfWorld2(israel)} %  of the world population`);

console.log( `the percentage of japan populations is ${percentageOfWorld2(japan)} %  of the world population`);

console.log(`the percentage of uk populations is ${percentageOfWorld2(uk)} %  of the world population`);
