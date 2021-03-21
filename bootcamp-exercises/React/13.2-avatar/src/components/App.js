import { Component } from "react";
import Card from "./Card";
import axios from "axios";
class App extends Component {
	state = { usersData: [] };

	async componentDidMount() {
		const users = [];
		for (let i = 0; i < 10; i++) {
			let user = await axios.get("https://randomuser.me/api/");
			users.push(user.data.results[0]);
		}
		this.setState({ usersData: users });
	}
	search = (e) => {
		const input = e.target.value;
	};
	render() {
		const createCard = () => {
			return this.state.usersData.map((el) => {
				return <Card key={el.login.md5} obj={el} />;
			});
		};
		return (
			<div>
				<input
					onChange={this.search}
					type="text"
					style={{
						display: "block",
						margin: "auto",
						padding: "2px",
					}}
				/>
				{createCard()}
			</div>
		);
	}
}

export default App;
