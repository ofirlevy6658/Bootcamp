function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
        }
        for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
        }
    }
getSum([1,2,3],[5,66,23]);

//TypeError: Cannot read property 'length' of undefined
// I read from the terminal the error 
// we didnt put , between the arrays we sent to get sum
// sum is 'const' varirable need to change to 'let'