import { Component } from "react";
import storeData from "../storeData";

import Card from "./Card";
class ProductDetail extends Component {
	state = { product: null };
	componentDidMount() {
		const id = Number(this.props.match.params.id);
		const findProduct = storeData.find((item) => item.id === id);
		this.setState({ product: findProduct });
	}
	render() {
		return (
			<div>{this.state.product && <Card product={this.state.product} />}</div>
		);
	}
}

export default ProductDetail;
