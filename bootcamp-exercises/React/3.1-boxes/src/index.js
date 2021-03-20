import React from "react";
import ReactDom from "react-dom";
import Box1 from "./Box1";

const App = () => {
	return (
		<div>
			<Box1 />
		</div>
	);
};
ReactDom.render(<App />, document.querySelector("#root"));
