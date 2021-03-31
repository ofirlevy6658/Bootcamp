import React, { useEffect, useState } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const Toggle = () => {
	let source = axios.CancelToken.source();

	const [toggleBtn, setToggleBtn] = useState("show");
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://hn.algolia.com/api/v1/search?query=hooks",
				{ cancelToken: source.token }
			);
			setData(response.data.hits[0].created_at);
		};
		return () => {
			if (toggleBtn === "hide") {
				setData([]);
				source.cancel();
			} else fetchData();
		};
	}, [toggleBtn]);

	const toggleHandle = () => {
		toggleBtn === "show" ? setToggleBtn("hide") : setToggleBtn("show");
	};
	return (
		<>
			<button onClick={toggleHandle}>{toggleBtn}</button>
			<p>{data}</p>
		</>
	);
};

export default Toggle;
