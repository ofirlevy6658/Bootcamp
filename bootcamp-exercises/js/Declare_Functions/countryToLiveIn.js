const countryToLiveIn = (language, isIsland, population,country) =>{
    if(population<50 && language==='english' && !isIsland)
        return `Yous hould live in ${country}`
    else{
        return `${country} does not meet your criteria`
    }
}

let sarah = countryToLiveIn('hebrew',false,10,'Israel');
console.log(sarah)
sarah  = countryToLiveIn('english',false,2,'Malawi');
console.log(sarah)