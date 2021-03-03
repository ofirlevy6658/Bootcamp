const url = "http://www.omdbapi.com/?apikey=86ae5f35&t=";
const btn = document.querySelector(".btn");
let userSearch = document.querySelector("#movie");
const wrongMovie = document.querySelector("#notFound");
btn.addEventListener("click", displayData);

//
const request = async (movie) => {
	const resposne = await fetch(
		`http://www.omdbapi.com/?apikey=86ae5f35&t=${movie}`
	);
	return resposne.json();
};
async function displayData() {
	const data = await request(userSearch.value);
	console.log(data);
	if (data.Response === "False") {
		wrongMovie.style.visibility = "visible";
		return;
	}

	wrongMovie.style.visibility = "hidden";
	const movie = {
		poster: data.Poster,
		title: data.Title,
		genere: data.Genre,
		year: data.Year,
		plot: data.Plot,
		director: data.Director,
		actors: data.Actors,
		ratings: data.Ratings,
	};

	const container = document.querySelector(".container");

	const dataElement = `<div>
	 							<img src="${movie.poster}" width="200px">
	 							<h1>${movie.title}</h1>
	 							<h2>${movie.genere}</h2>
                                <h4>${movie.year}<h4>
                                <p>${movie.plot}</p>
                                <h4>Director</h4>
                                <p>${movie.director}</p>
                                <h4>Actors</h4>
                                <p>${movie.actors}</p>
                                <h4>Rating</h4>
	 						</div>`;
	const divMovie = document.querySelector(".movie");
	divMovie.innerHTML = dataElement;
	divMovie.style.border = "solid black 3px";
	container.appendChild(divMovie);
}
