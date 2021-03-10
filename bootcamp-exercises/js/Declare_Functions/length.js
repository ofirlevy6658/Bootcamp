const leng = (arry) =>{
    let arryLength = arry.map((element)=>{
        return element.length
    })
    return arryLength
}

console.log(leng(["boo", "doooo", "hoo","ro"]));

