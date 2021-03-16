import React from "react";
import ReactDom from "react-dom";
import Box from "./Box";
class App extends React.Component {
	state = { width: "0" };

	componentDidMount() {
		setTimeout(() => {
			this.setState({ width: "300px" });
		}, 1000);
	}
	// componentDidUpdate() {
	// 	const div = document.querySelector("#div");
	// 	const el = document.createElement("p");
	// 	el.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
	// 	div.appendChild(el);
	// }
	render() {
		return (
			<div>
				<Box width={this.state.width} height="100px" color="green" />
				<Box width={this.state.width} height="50px" color="red" />
				<Box width={this.state.width} height="70px" color="blue" />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
