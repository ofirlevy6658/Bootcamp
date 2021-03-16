import React from "react";

const Box = (props) => {
	return (
		<div
			style={{
				width: props.width,
				height: props.height,
				backgroundColor: props.color,
				transition: "width 3s",
			}}
		></div>
	);
};

export default Box;
