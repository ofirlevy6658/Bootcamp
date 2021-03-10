//1
let arr = new Array(100).fill({'hello':'goodbye'});
console.log(arr);

//2
let range = Array.from({length:100},(item,index) => index+1);
console.log(range);

//3
let obj = {name:"ofir",age:25,city:"homless"}
console.log(Object.keys(obj));

//4
Object.assign({}, ['a','b','c']);

//5
let array = []
let str = 'not array?$@!?#$!@?'
console.log(array instanceof Array);
console.log(str instanceof Array);

//6
array = [1,2,3,4,5,6];
deepCopy = [...array]
deepCopy.pop()
console.log(array)
console.log(deepCopy)

refcopy = array;
refcopy.pop();
refcopy.pop();
refcopy.pop();
console.log(array)
console.log(refcopy)
