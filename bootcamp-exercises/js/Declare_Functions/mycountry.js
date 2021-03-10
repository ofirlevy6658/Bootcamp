const myCountry = {
    country : 'Australia',
    capital : 'Canberra',
    language : 'English',
    population : 25,
    neighbours : [],
    describe(){
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland(){
        this.neighbours.length === 0 ? myCountry.isIsland = true : myCountry.isIsland = false;

    }
}
console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);
