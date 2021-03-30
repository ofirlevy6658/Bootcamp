import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://swapi.dev/api/films/1/");
				setData(response.data);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<h1>{data && data.title}</h1>
			<h3>{data && data.producer}</h3>
		</>
	);
};

export default Movie;
