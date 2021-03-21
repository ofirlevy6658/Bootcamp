import { Component } from "react";
import data from "./data";
import Card from "./Card";
class App extends Component {
	state = { userData: data };

	getNames = () => {
		const arrName = this.state.userData.map((el) => el.name);
		return arrName.join(" ");
	};
	componentDidMount() {
		const arrFilterByYear = this.state.userData.filter((el) => {
			return parseInt(el.birthday.slice(-4)) < 1994;
		});
		this.setState({ userData: arrFilterByYear });
	}

	render() {
		const createCard = () => {
			return this.state.userData.map((el) => {
				return <Card obj={el} />;
			});
		};
		return (
			<div>
				<h1>Name: {this.getNames()}</h1>
				<p>{createCard()}</p>
			</div>
		);
	}
}

export default App;
