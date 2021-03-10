function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    return sum/arr.length ;
}

console.log( calcAverage ([ 85 , 90 , 92 ]));

// sum wasent init and the return was the sum not avg so need to /arr.length the sum