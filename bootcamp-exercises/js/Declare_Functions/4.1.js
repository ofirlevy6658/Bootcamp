let numSiblings = prompt("'How many siblings do you have??");
console.log(typeof numSiblings)
numSiblings = Number(numSiblings);

if(numSiblings === 1){
    console.log('1 sibling!')
}
else if(numSiblings > 1){
    console.log('more than one sibling!')
}
else{
    console.log('no sibling!')
}

// its happend because === check tpye and value whereas == check only value