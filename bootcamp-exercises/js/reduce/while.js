const loop = (arr)=>{
    let i=0,j=0;
    while(i<arr.length){
        while(j<arr[i].length){
            console.log(`Neighbour: ${arr[i][j]}`);
            j++
        }
        j=0;
        i++;
    }
}

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
    loop(listOfNeighbours);
