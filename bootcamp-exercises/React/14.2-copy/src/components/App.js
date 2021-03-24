import React, { Component } from "react";

class App extends Component {
	inputRef = React.createRef();

	async componentDidMount() {
		this.inputRef.current.focus();
	}
	handelInput = () => {
		this.inputRef.current.select();
		document.execCommand("copy");
	};

	render() {
		return (
			<div>
				<textarea ref={this.inputRef} type="text" />
				<button onClick={this.handelInput} style={{ display: "block" }}>
					copy
				</button>
			</div>
		);
	}
}

export default App;
