const populations = [1200,40,6,10];

const percentageOfWorld1 = (population) =>
  Math.round((population / 7900) * 100 * 10) / 10;

const populationPercentages = (arr) =>{
    percentages = arr.map(percentageOfWorld1);
    return percentages;
}
console.log(populationPercentages(populations)); 
