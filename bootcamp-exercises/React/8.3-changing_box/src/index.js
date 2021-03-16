import React from "react";
import ReactDom from "react-dom";
import Box from "./Box";
import "./style.css";

class App extends React.Component {
	state = { color: "purple", i: 0 };

	componentDidMount() {
		setInterval(() => {
			const col = this.colors(this.state.i);
			this.setState({ color: col, i: this.state.i + 1 });
		}, 500);
		setTimeout(() => {
			document.querySelector("#box").classList.add("circle");
		}, 2500);
	}
	colors(i) {
		const color = ["yellow", "black", "brown", "red"];
		return color[i];
	}

	render() {
		return (
			<div>
				<Box width="250px" height="250px" color={this.state.color} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
