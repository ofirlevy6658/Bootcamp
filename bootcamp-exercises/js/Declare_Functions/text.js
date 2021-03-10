
function alphabetPosition(text) {
    const aplhaBeta = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let str=[];
    for(let i=0;i<text.length;i++){
        if(aplhaBeta.includes(text[i].toLowerCase()))
            str.push(aplhaBeta.indexOf(text[i].toLowerCase())+1);
    }
    return(str.join(' '));
}

console.log(alphabetPosition('T')); 

function duplicateCount(text){
    let mySet = new Set()
    text = text.toLowerCase();
    for(let i=0;i<text.length;i++){
        if(text.indexOf(text[i],i+1)!=-1)
            mySet.add(text[i]);
    }
    return mySet.size;
}
duplicateCount("abcdaaaaaaaab")