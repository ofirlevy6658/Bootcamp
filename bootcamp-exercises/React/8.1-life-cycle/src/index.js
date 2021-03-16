import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
	state = { favoriteColor: "green" };

	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: "blue" });
		}, 1000);
	}
	componentDidUpdate() {
		const div = document.querySelector("#div");
		const el = document.createElement("p");
		el.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
		div.appendChild(el);
	}
	render() {
		return (
			<div>
				<h1 style={{ color: this.state.favoriteColor }}>
					My favorite color is {this.state.favoriteColor}
				</h1>
				<div id="div" style={{ color: this.state.favoriteColor }}></div>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
