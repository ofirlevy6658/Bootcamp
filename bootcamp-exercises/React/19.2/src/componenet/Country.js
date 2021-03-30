import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Country = () => {
	const [data, setData] = useState([]);
	const [Countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://restcountries.eu/rest/v2/all"
				);
				setData(response.data);
				setCountries(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const renderCountries = Countries.map((el) => {
		return (
			<Fragment key={el.alpha2Code}>
				<p>{el.demonym}</p>
			</Fragment>
		);
	});
	const searchHandle = (e) => {
		const value = e.target.value;
		const searchFilter = data.filter((el) =>
			el.demonym.toLowerCase().startsWith(value.toLowerCase())
		);
		setCountries(searchFilter);
	};
	return (
		<>
			<input id="search" type="text" onChange={searchHandle} />

			{renderCountries}
		</>
	);
};

export default Country;
