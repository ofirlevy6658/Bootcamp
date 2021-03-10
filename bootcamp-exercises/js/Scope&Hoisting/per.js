const obj = {};
let mapName = new Map();

const maxCount = 1000000;
console.time("My operation"); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
	//Perform the operation to be measured multiple times
	obj[i] = i;
}
console.timeEnd("My operation"); // <---- Stops the time

console.time("My operation"); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
	//Perform the operation to be measured multiple times
	mapName.set(i, i);
}
console.timeEnd("My operation"); // <---- Stops the time
