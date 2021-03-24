import React, { Component } from "react";

class App extends Component {
	inputRef = React.createRef();

	async componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		return (
			<div>
				<input ref={this.inputRef} placeholder="enter name" type="text" />
			</div>
		);
	}
}

export default App;
