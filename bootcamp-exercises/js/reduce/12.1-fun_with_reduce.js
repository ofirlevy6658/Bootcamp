
const max = (...numbers)=>{
    let maxNum = numbers.reduce((second, currentValue)=>{
        if(currentValue>=second)
            return currentValue;
        return second;
    })
    return maxNum;
}

const sumEven = (...numbers)=>{
    const sum = numbers.reduce((accumulator, currentValue)=>{
        console.log(accumulator,currentValue);
        if(currentValue%2===0)
            return currentValue+accumulator;
        return accumulator;
},0)
    return sumEven;
}

const average = (...numbers)=>{
    const avg = numbers.reduce((accumulator, currentValue)=> accumulator+currentValue)
    console.log(avg/numbers.length);
}

average(100,50,99)