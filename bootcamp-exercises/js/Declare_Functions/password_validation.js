const passExpression = (pass) =>{
    if(pass.length>7)
        return "Strong";
    return "Weak";
    
}

const passTernary = (pass) =>{
    return pass.length>7 ? 'Strong':'Weak';
    }

    //not clear we dont need to use && since we have only one option
// const passLogicl = (pass) =>{
//     if(pass.length>7)
//         return "Strong";
//     return "Weak";
// }

const hasUpper = (str) =>{
    for(let letter in str){
    if(letter>='A' && letter<='Z')
        return true;
    }
    return false;
}

const advPass = (pass)=>{
    if(pass.toLowerCase()===pass && pass.length>7)
        return "Very Strong"
    return pass.length>7 ? 'Strong':'Weak';
}

console.log(advPass('342dsadasdsa4'))
console.log(advPass('34S2dsadasdsa4'))