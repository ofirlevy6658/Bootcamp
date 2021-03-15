import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0, color: "black" };
	}
	inc = () => {
		const value = this.state.counter;
		if (value < 10) {
			if (value === -1) this.setState({ counter: value + 1, color: "black" });
			else if (value >= 0) {
				this.setState({ counter: value + 1, color: "green" });
			} else this.setState({ counter: value + 1 });
		}
	};
	dec = () => {
		const value = this.state.counter;
		if (value > -10) {
			if (value === 1) this.setState({ counter: value - 1, color: "black" });
			else if (value <= 0) {
				this.setState({ counter: value - 1, color: "red" });
			} else this.setState({ counter: value - 1 });
		}
	};

	render() {
		return (
			<div
				style={{ border: "solid black 3px", height: "300px", width: "300px" }}
			>
				<button className="plus" onClick={this.inc}>
					inc+
				</button>
				<button className="minus" onClick={this.dec}>
					dec-
				</button>
				<label style={{ color: this.state.color }}>{this.state.counter}</label>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
