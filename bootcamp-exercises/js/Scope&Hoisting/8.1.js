const obj1 = {
	name: "yosi",
};
const obj2 = {
	name: "rami",
};
const obj3 = {
	name: "dani",
};

let mapName = new Map();
mapName.set(obj1, 206547899);
mapName.set(obj2, 276547899);
mapName.set(obj3, 287547899);
for (let i of mapName) {
	console.log(i[0].name, i[1]);
}
