import React from "react";
import ReactDom from "react-dom";
import { Spinner, Spinner2, Spinner3 } from "./Spinner";
import "./style.css";

class App extends React.Component {
	state = { visible: true, random: null };

	componentDidMount() {
		this.setState({ random: Math.floor(Math.random() * 3 + 1) });
		setTimeout(() => {
			this.setState({ visible: false });
		}, 2500);
	}

	render() {
		return (
			<div style={{ marginTop: "150px" }}>
				{this.state.random === 1 && this.state.visible && <Spinner />}
				{this.state.random === 2 && this.state.visible && <Spinner2 />}
				{this.state.random === 3 && this.state.visible && <Spinner3 />}
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
