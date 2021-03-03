const url = "https://api.github.com/users/";
const btn = document.querySelector(".btn");
let userSearch = document.querySelector("#username");
const worngUser = document.querySelector("#notFound");
btn.addEventListener("click", displayData);

//
const request = async (username) => {
	const resposne = await fetch(`https://api.github.com/users/${username}`);
	if (resposne.status === 404) {
		return resposne.status;
	}
	return resposne.json();
};

async function displayData() {
	const data = await request(userSearch.value);
	if (data === 404) {
		worngUser.style.visibility = "visible";
		return;
	}
	worngUser.style.visibility = "hidden";
	const container = document.querySelector(".container");
	let avatar = data.avatar_url;
	let login = data.login;
	let publicRepo = data.public_repos;
	const dataElement = `<div class="user">
							<img src="${avatar}" width="200px">
							<h2>${login}</h2>
							<h2>${publicRepo}</h2>
						</div>`;
	const div = document.createElement("div");
	div.innerHTML = dataElement;
	container.appendChild(div);
}
