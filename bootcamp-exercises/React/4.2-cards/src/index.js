import React from "react";
import ReactDom from "react-dom";
import Card from "./Card.js";
const App = () => {
	return (
		<div>
			<Card
				src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-preview-1.jpg"
				header="card 1"
				des="this is card 1"
			/>
			<Card
				src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-preview-3.jpg"
				header="card 2"
				des="this is card 2"
			/>
			<Card
				src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-preview-6.jpg"
				header="card 3"
				des="this is card 3"
			/>
		</div>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
