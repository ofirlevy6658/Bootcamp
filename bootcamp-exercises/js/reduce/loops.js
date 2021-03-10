const loop = (arr)=>{
    for(let i of arr){
        for(let j of i)
        console.log(`Neighbour: ${j}`);
    }
}

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
    loop(listOfNeighbours);
