const hero = {
	health: 5,
	power: 68,
	getStrength: function () {
		if (this.health <= 5) {
			return this.power - 10;
		} else return this.power;
	},
};
function whoIsStronger(getStrength) {
	const myStrength = 82;
	console.log(getStrength());
	if (getStrength() < myStrength) {
		return "I am stronger";
	} else return "You are stronger";
}

// console.log(whoIsStronger(hero.getStrength));
console.log(whoIsStronger(hero.getStrength.bind(hero)));
// the problem with the call is that when we call getStrength() from whoIsStronger its return untifiend because the this not defined
// to fix that we should bind the hero
