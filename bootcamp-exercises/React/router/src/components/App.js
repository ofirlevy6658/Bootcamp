import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Header from "./Header";
import ProductDetail from "./ProductDetail";

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" exact component={Home} />
						<Route path="/products" exact component={Products} />
						<Route path="/products/:id" exact component={ProductDetail} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
