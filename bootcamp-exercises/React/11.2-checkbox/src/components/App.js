import { Component } from "react";
import CustomCheckBox from "./CustomCheckBox";
class App extends Component {
	handleChangeChk = () => {
		console.log("test");
	};
	createCheckBox = () => {
		const arr = ["c1", "c2"];
		return arr.map((el) => <CustomCheckBox func={this.handleChangeChk} />);
	};
	createCheckBox2 = () => {
		const arr = ["c3", "c4"];
		return arr.map((el) => (
			<CustomCheckBox func={this.handleChangeChk} check={true} />
		));
	};
	render() {
		return (
			<div>
				{this.createCheckBox()}
				<div>{this.createCheckBox2()}</div>
			</div>
		);
	}
}

export default App;
