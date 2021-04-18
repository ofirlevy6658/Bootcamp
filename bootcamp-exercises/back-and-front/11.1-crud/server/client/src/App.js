import React, { useState } from "react";
import axios from "axios";
import "./style.css";
const App = () => {
	const [users, setUsers] = useState([]);

	const showUsers = async () => {
		const usersData = await axios.get("http://localhost:4000/api/users");
		setUsers(usersData.data);
	};
	const renderUsers = users.map((el) => {
		return (
			<div key={el.id} className="card">
				<h3>cash: {el.cash}$</h3>
				<h3>credit: {el.credit}$</h3>
			</div>
		);
	});
	return (
		<>
			<h1>Hello</h1>
			<button onClick={showUsers}>Show users</button>
			<>{users && renderUsers}</>
		</>
	);
};

export default App;
