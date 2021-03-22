import { Component } from "react";
import { Link } from "react-router-dom";

import storeData from "../storeData";

class Products extends Component {
	state = { data: [] };
	async componentDidMount() {
		await this.setState({ data: storeData });
		console.log(this.state.data[0].id);
	}
	render() {
		const renderProducts = () => {
			return this.state.data.map((product) => {
				return (
					<Link
						to={`${this.props.location.pathname}/${product.id}`}
						key={product.id}
						className=" item"
					>
						{product.title} sadsa
					</Link>
				);
			});
		};
		return <div className="ui secondary pointing menu">{renderProducts()}</div>;
	}
}

export default Products;
