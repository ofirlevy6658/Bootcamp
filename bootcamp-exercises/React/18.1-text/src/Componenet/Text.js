import React, { useState } from "react";

const Text = ({ text, length }) => {
	const [visible, setVisible] = useState(false);
	const clickHandle = () => {
		setVisible(!visible);
	};
	return (
		<>
			<p onClick={clickHandle}>{!visible && text.slice(0, length)} </p>
			<p onClick={clickHandle}>{visible && text}</p>
		</>
	);
};

export default Text;
