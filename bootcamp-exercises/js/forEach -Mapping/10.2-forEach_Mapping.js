//1
const doubleValues = element =>element*2;
const arr = [1,2,3,4,5,6];
const arrDouble = arr.map(doubleValues);

console.log(arrDouble);

//2
const onlyEvenValues = element => element %2 ===0;
const arrEven = arr.filter(onlyEvenValues);
console.log(arrEven);


//3
const showFirstAndLast = (element,index,array) => element===array[0]||element===array[array.length-1] &&typeof element === 'string' 
const arr2 = ['a',321,'dsadas',21,'sasd'];
const arr3 = ['od',321,'e21d',21,1];
const arrShowFirstAndLast = arr2.filter(showFirstAndLast);
console.log(arrShowFirstAndLast);
const arrShowFirstAndLast2 = arr3.filter(showFirstAndLast);
console.log(arrShowFirstAndLast2);

//4

const vowelCount = (str)=>{
    let obj={}
    for (let i of str){
        if('aeiouy'.includes(i.toLowerCase())){
            obj[i] === undefined ? obj[i]=1 : obj[i]++;
            console.log('test');
        }
    }
    return obj;
}
const str = 'this is a test i bla ibilia';
console.log(vowelCount(str));

//5

const capitalize = str => str.toUpperCase();
console.log(capitalize('wtf?'));

//6
const shiftLetters = (str) => {
    let strShift = '';
    for(let i of str){
        strShift += i ==='a' ? 'z' : String.fromCharCode(i.charCodeAt(0)-1);
    }
    return strShift
}
console.log(shiftLetters('abcd'));
console.log(shiftLetters('ewqdwqszqwcag'));

//7
const swapCase = (str) =>{
    const arrCapitalized = str.split(' ').map((element,index)=> index%2===0 ? element.toUpperCase():element.toLowerCase());
    return arrCapitalized.join(' ');
}

console.log(swapCase('Create a function called swapCase'));
