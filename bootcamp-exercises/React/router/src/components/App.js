import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/products" exact component={Products} />
							<Route path="/products/:id" exact component={ProductDetail} />
							<Route path="/" component={NotFound} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
