import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { switch: true, visibility: "visible" };
	}
	hideSeek = () => {
		if (this.state.switch === true) {
			this.setState({ switch: false, visibility: "hidden" });
		} else {
			this.setState({ switch: true, visibility: "visible" });
		}
	};
	render() {
		return (
			<div
				style={{ border: "solid black 3px", height: "300px", width: "300px" }}
			>
				<button onClick={this.hideSeek} style={{ color: "Red" }}>
					show/hide
				</button>
				<div
					style={{
						marginTop: "30px",
						backgroundColor: "yellow",
						width: "100px",
						height: "100px",
						visibility: this.state.visibility,
					}}
				></div>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
