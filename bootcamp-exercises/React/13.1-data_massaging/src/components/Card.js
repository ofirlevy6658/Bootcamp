import React from "react";

const Card = ({ obj }) => {
	const data = () => {};
	return (
		<div
			style={{
				width: "200px",
				height: "300px",
				backgroundColor: "Red",
				textAlign: "center",
				border: "black solid 3px",
				display: "inline-block",
				marginLeft: "15px",
			}}
		>
			<h1>{obj.name}</h1>
			<h3>{obj.birthday}</h3>
			<h4>{obj.favoriteFoods.meats.join(" ")}</h4>
			<h4>{obj.favoriteFoods.fish.join(" ")}</h4>
		</div>
	);
};

export default Card;
