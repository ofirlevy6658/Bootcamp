const express = require("express");
const Product = require("./mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", async (req, res) => {
	try {
		const products = await Product.find({});
		res.send(products);
	} catch (e) {
		res.status(500).send();
	}
});

app.get("/product/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.send(product);
	} catch (e) {
		res.status(500).send("User not found");
	}
});

app.get("/products/active", async (req, res) => {
	try {
		const activeProducts = await Product.find({ isActive: true });

		res.send(activeProducts);
	} catch (e) {
		res.status(500).send("No active products");
	}
});

app.get("/products/over-nine-thousand", async (req, res) => {
	try {
		const products = await Product.find({ "details.price": { $gte: 9000 } });
		console.log(products);
		res.send(products);
	} catch (e) {
		res.status(500).send("no products over nine THOUSAND");
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
