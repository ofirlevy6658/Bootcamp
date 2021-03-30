import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./style.css";

const App = () => {
	const [randomJoke, setRandomJoke] = useState(null);
	const [categories, setCategories] = useState([]);
	const [categoryJoke, setCategoryJoke] = useState(null);
	const [query, setQuery] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.chucknorris.io/jokes/categories`
				);
				setCategories(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			if (!query) return;
			try {
				const response = await axios.get(
					`https://api.chucknorris.io/jokes/random?category=${query}`
				);
				setCategoryJoke(response.data.value);
				console.log(response.data.value);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [query]);

	const handleRandomJoke = async () => {
		const response = await axios.get("https://api.chucknorris.io/jokes/random");
		setRandomJoke(response.data.value);
	};
	const handleClick = (e) => {
		const value = e.target.value;
		setQuery(value);
	};
	const renderCategory = categories.map((el) => {
		return (
			<Fragment key={el}>
				<button value={el} onClick={handleClick}>
					{el}
				</button>
			</Fragment>
		);
	});

	return (
		<>
			<div className="randomJoke">
				<button style={{ display: "block" }} onClick={handleRandomJoke}>
					Random joke
				</button>
				<h3>{randomJoke}</h3>
			</div>
			{renderCategory}
			<h3>{categoryJoke}</h3>
		</>
	);
};

export default App;
