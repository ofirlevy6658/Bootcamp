import React from "react";

const Card = ({ obj }) => {
	return (
		<div
			style={{
				width: "200px",
				height: "300px",
				textAlign: "center",
				border: "black solid 3px",
				display: "inline-block",
				marginLeft: "15px",
			}}
		>
			<img src={obj.picture.large} alt="profile img" />
			<h4>
				{obj.name.first} {obj.name.last}
			</h4>
			<h4>{obj.cell}</h4>
			<h4>{obj.gender}</h4>
		</div>
	);
};

export default Card;
