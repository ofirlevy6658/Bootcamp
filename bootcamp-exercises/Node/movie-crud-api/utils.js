const fs = require("fs");

const getMovies = () => {
	const movies = loadMovie();
	return movies;
};
const getMovie = (id) => {
	const movies = loadMovie();
	const movie = movies.find((el) => el.id === id);
	if (movie) return movie;
	throw new Error("Movie not found");
};

const addMovie = (movie) => {
	const movies = loadMovie();
	movies.push(movie);
	saveMovies(movies);
};

const updateMovie = (id, { title, rating, genre, length }) => {
	const movies = loadMovie();
	let movie = movies.find((el) => el.id === id);
	if (!movie) throw new Error("Movie not found ");
	movie = Object.assign(movie, {
		title: title ? title : movie.title,
		rating: rating ? rating : movie.rating,
		genre: genre ? genre : movie.genre,
		length: length ? length : movie.length,
	});
	saveMovies(movies);
};

function deleteMovie(id) {
	const movies = loadMovie();
	let movieIndex = -1;
	movies.forEach((el, index) => {
		if (el.id === id) movieIndex = index;
	});
	if (movieIndex === -1) throw new Error("Movie not found ");
	movies.splice(movieIndex, 1);
	saveMovies(movies);
}

function saveMovies(movies) {
	const dataJSON = JSON.stringify(movies);
	fs.writeFileSync("movies.json", dataJSON);
}

function loadMovie() {
	try {
		const dataBuffer = fs.readFileSync("movies.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}

// const saveMovie = (movie) => {

// 	fs.writeFileSync("movies.json", dataJSON);
// };

// const loadUsers = () => {
// 	try {
// 		const dataBuffer = fs.readFileSync("users.json");
// 		const dataJSON = dataBuffer.toString();
// 		return JSON.parse(dataJSON);
// 	} catch (e) {
// 		return [];
// 	}
// };

module.exports = { getMovies, addMovie, getMovie, updateMovie, deleteMovie };
