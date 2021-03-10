const swap = (obj)=>{
    let keys = Object.keys(obj),values = Object.values(obj);
    swapObj = {};
    for(let i=0;i<values.length;i++){
        swapObj[values[i]] = keys[i]
    }
    return swapObj
}

const tesla = {
    wheels:4,
    doors:1.2,
    color: 'yes',
    engine: 'no'
}
console.log(swap(tesla)); 