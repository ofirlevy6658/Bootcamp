const url = "http://www.omdbapi.com/?apikey=86ae5f35&t=";
const btn = document.querySelector(".btn");
let userSearch = document.querySelector("#movie");
const wrongMovie = document.querySelector("#notFound");
btn.addEventListener("click", displayData);

//
const request = async (movie) => {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=7764b08d&t=${movie}`
	);
	console.log(response.ok);
	if (!response.status) {
		return;
	}
	return response.json();
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
	let rateStr = "";
	movie.ratings.forEach((rate) => {
		console.log(rate);
		rateStr = ` ${rateStr} ${rate.Source} ${rate.Value}<br>`;
	});
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
                                <p>${rateStr}</p>
	 					    </div>`;
	const divMovie = document.querySelector(".movie");
	divMovie.innerHTML = dataElement;
	divMovie.style.border = "solid black 3px";
	container.appendChild(divMovie);
}
