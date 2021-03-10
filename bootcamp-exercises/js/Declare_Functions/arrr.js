const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

const countLetter = (arr) =>{
    let str = arr.join('').replace(/ /g,'').toLowerCase()
    obj={};
    for(let i of str){
        obj[i] = 0;
    }
    for(let i of str){
        obj[i] ++;
    }
    return obj
}
console.log(countLetter(array));
