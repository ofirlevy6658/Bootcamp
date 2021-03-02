const url = "https://swapi.dev/api/";

async function reqest(type) {
	const resposne = await fetch(`https://swapi.dev/api/${type}`);
	const data = await resposne.json();
	return data.results;
}

async function display() {
	const names = await reqest("people");
	// const planets = await reqest("planets");
	// const starships = await reqest("starships");
	//create the table
	const table = document.createElement("table");
	let th = document.createElement("th");
	let name = document.createTextNode("Name");
	th.appendChild(name);
	let tr = document.createElement("tr");
	table.appendChild(th);
	table.appendChild(tr);
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 1; j++) {
			let td = document.createElement("td");
			let text = document.createTextNode(`${names[i].name}`);
			let td2 = document.createElement("td");
			let text2 = document.createTextNode(`${names[i].hair_color}`);
			let td3 = document.createElement("td");
			let text3 = document.createTextNode(`${names[i].height}`);
			td.appendChild(text);
			td2.appendChild(text2);
			td3.appendChild(text3);
			table.appendChild(td);
			table.appendChild(td2);
			table.appendChild(td3);
		}
		tr = document.createElement("tr");
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}

display();
