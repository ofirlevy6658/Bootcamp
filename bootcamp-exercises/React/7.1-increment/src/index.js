import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}
	clicks = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
	render() {
		return (
			<div>
				<button onClick={this.clicks} style={{ color: "Red" }}>
					increment
				</button>
				<p>{this.state.counter}</p>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
