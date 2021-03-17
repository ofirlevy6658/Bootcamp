import { Component } from "react";
import CustomButton from "./CustomButton";
class App extends Component {
	state = { selected: null };
	onInputClick = (e) => {
		this.setState({
			selected: e.target.value,
		});
	};
	createBtn = () => {
		const colors = ["red", "blue", "yellow"];
		return colors.map((color) => (
			<CustomButton cColor={color} func={this.onInputClick}></CustomButton>
		));
	};
	render() {
		return (
			<div>
				{this.createBtn()}
				<h3>You clicked on {this.state.selected}</h3>
			</div>
		);
	}
}

export default App;
