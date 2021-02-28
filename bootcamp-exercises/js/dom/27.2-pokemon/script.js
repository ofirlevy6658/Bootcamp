function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

const pikachu = new Pokemon("pikachu", "electric", [
	"Thunder Shock",
	"Electro Ball",
	"Thunder Wave",
]);

const snorlax = new Pokemon("snorlax", "normal", [
	"Hyper Beam",
	"Earthquake",
	"Heavy Slam",
]);

Pokemon.prototype.callPokemon = function () {
	console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNum) {
	console.log(`${this.name} used ${this.attackList[attackNum]}`);
};
pikachu.callPokemon();
snorlax.callPokemon();
pikachu.attack(1);
snorlax.attack(1);
pikachu.attack(2);
snorlax.attack(0);
