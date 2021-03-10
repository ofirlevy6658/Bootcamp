const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
        ],
        cashRegister: 200,
}

//1
function getCandy(candyStore, id){
    for(let i of candyStore.candies)
        if(i.id===id){
            return i;
        }
}

console.log(getCandy(candyStore,'5hd7y')); 
console.log(getCandy(candyStore,'as12f')); 

function getPrice(candyStore, id){
    for(let i of candyStore.candies)
    if(i.id===id){
        return i.price;
    }
} 
console.log('*****2*****');
console.log(getPrice(candyStore,'5hd7y')); 
console.log(getPrice(candyStore,'as12f'));

console.log("*****3*****");
function addCandy(candyStore, id, name, price){
    candyStore.candies[candyStore.candies.length] = {name,id,price,amount:1}
}   

addCandy(candyStore,'wtf-igo','likritz',9001)
console.log(candyStore.candies);

console.log("*****4*****");

function buy(candyStore, id){
    let candy = getCandy(candyStore,id);
    if(candy.amount>=1){
        candy.amount --;
        candyStore.cashRegister += candy.price; 
    }
    else{
        console.log('Not in stockkkkkkkkkkkkkkkkk Q_Q');
    }
}
console.log("*5*");
buy(candyStore,'5hd7y');
buy(candyStore,'as12f');
console.log(candyStore);