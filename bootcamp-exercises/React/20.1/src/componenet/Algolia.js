import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Spinner from "./Spinner";

const Algolia = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("hooks");
	const [search, setSearch] = useState("hooks");
	const [loading, setLoad] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoad(true);
			try {
				const response = await axios.get(
					`https://hn.algolia.com/api/v1/search?query=${query}`
				);
				setData(response.data.hits);
				setLoad(false);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [query]);

	const renderInfo = data.map((el) => {
		return (
			<Fragment key={el.objectID}>
				<p>
					<a rel="noreferrer" href={el.url} target="_blank">
						{el.title}
					</a>
				</p>
			</Fragment>
		);
	});

	const searchHandle = () => {
		setQuery(search);
	};

	return (
		<>
			<input
				type="text"
				defaultValue="hooks"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={searchHandle}>search</button>
			{!loading && renderInfo}
			{loading && <Spinner />}
		</>
	);
};

export default Algolia;
