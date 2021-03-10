const leap = (year) => {
    if(year%100!=0 && year%4===0 ||year%400==0){
        console.log("It is indeed a leap year");
    }
    else{
        console.log("This is not a leap year.");
    }
}
leap(2012);
leap(2100);
leap(2400);
leap(2020);
leap(2032);
leap(2031);
leap(2028);
str="abv"
String;
console.log(str.toUpperCase());   