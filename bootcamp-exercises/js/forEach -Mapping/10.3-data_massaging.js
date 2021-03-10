const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];

const getName = (data) =>{
    const names = data.map(element => (element.name))
    return names;
}
console.log(getName(data));

//2
const objBefore = (data) =>{
const objects = data.filter(element =>element['birthday'].slice(element['birthday'].length-4)<1990)
return objects;
}

console.log(objBefore(data));

//3
const food = (data,food) =>{
    foodArray = data.map(element => element.favoriteFoods[food])
    foodObj = {}
    for(let i of foodArray)
    {
        for( let j of i){
            foodObj[j] === undefined ?  foodObj[j] = 1 : foodObj[j]++;
        }
    }
    return foodObj
}

const diffFood = (data) =>{
    return {...food(data,'meats'), ...food(data,'fish')}
}

console.log(diffFood(data));