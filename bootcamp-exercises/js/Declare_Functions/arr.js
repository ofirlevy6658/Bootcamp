const people = ["Greg", "Mary", "Devon", "James"];

//1
people.forEach(element => console.log(element))

//2
people.splice(0,1);
console.log(people);

//3
people.pop();
console.log(people);

//4
people.unshift("Matt");
console.log(people);

//5
people.push("Ofir");
console.log(people);

//6
for(let name of people){
    console.log(name);
    if(name==='Mary')
        break;
}

//7 copy
let arrCopy = [
    ...people.slice(2)
]
console.log(arrCopy);

//8
console.log(people.indexOf('Mary'))
//10
console.log(people.indexOf('Foo'))

//10
let people2 = ["Greg", "Mary", "Devon", "James"];
people2 = [...people2.splice(0,2),"Elizabeth",'Artie',...people2.splice(1)]
console.log(people2)

//11
let withBob = people2.concat('Bob')
console.log(withBob);