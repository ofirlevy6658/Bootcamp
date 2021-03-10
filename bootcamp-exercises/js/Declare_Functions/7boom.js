
const boom = (num) => {
    for(let i=1;i<=num;i++){
        if(i%7===0){
            if((i+'').indexOf('7') > -1){
                process.stdout.write("BOOM, ");
            }
            else{
                process.stdout.write("BOOM-BOOM, ");
            }
        }
        else{
            process.stdout.write(i+",");
        }
    }
}
str ="abc"


boom(100)