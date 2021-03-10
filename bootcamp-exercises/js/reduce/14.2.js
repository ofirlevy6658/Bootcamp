function findSmallest(a, b, c){
 if (a>c && b>c ){
 return c;
 } else if (b>a&& c>a) {
 return a;
} else {
 return b;
 }
}
console.log(findSmallest(52,66, 2));
console.log(findSmallest(522,66, 222));
console.log(findSmallest(52,66, 222));
// findSmalest is not defined the call of the method is wrong findSmalest ->findSmallest
// the program not return the smallest num so we need to check the logic
