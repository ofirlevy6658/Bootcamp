const storm = {
	// add code here
	superPower: "rain",
};
function printSuperPower() {
	console.log("my superpower is " + this.superPower);
}
storm.printSuperPower = printSuperPower;
storm.printSuperPower();
