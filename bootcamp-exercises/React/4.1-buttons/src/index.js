import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
const App = () => {
	return (
		<div>
			<Button content="Important" color="red" />
			<Button content="Important" color="green" />
		</div>
	);
};
ReactDom.render(<App />, document.querySelector("#root"));
