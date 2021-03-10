const cmpArr = (arr,arr2) =>{
    const common=[];
    for(let i of arr){
        for(let j of arr2){
            i===j ? common.push(i):null;
        }
    }
    console.log(common);
}



const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
cmpArr(food,food1);