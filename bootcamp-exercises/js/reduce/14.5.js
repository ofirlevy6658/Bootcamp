function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if (str.charAt(i)=== char ){
        counter ++ ;
    }
    }
    return counter ;
}

console.log(countOccurrences( "ini mini miny moe" , "i" ));

// counter + 1 is not count u should use counter ++ or counter+=1;