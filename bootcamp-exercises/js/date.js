function currentDate(){

    let d = new Date();

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    return `Today is ${weekday[d.getDay()]} the ${d.getDate()} of ${month[d.getMonth()]}, ${d.getFullYear()}`
}


console.log(currentDate())  