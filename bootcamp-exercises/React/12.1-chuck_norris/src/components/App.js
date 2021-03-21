import { Component } from "react";
import chucknorris from "../api/chucknorris";

class App extends Component {
	state = { categoryJoke: null, randomJoke: null, categories: [] };

	onClickRandom = async () => {
		const response = await chucknorris.get("/random");
		this.setState({ randomJoke: response.data.value });
	};
	async componentDidMount() {
		const response = await chucknorris.get("/categories");
		this.setState({ categories: response.data });
	}

	createBtn = () => {
		return this.state.categories.map((el) => (
			<button onClick={this.jokeByCat}>{el}</button>
		));
	};
	jokeByCat = async (e) => {
		const term = e.target.innerHTML;
		console.log(term);
		const response = await chucknorris.get("/random", {
			params: { category: term },
		});
		this.setState({ categoryJoke: response.data.value });
	};

	render() {
		return (
			<div>
				<button onClick={this.onClickRandom}>Random Joke</button>
				<h1>{this.state.randomJoke}</h1>
				<div>{this.createBtn()}</div>
				<h1>{this.state.categoryJoke}</h1>
			</div>
		);
	}
}
export default App;
