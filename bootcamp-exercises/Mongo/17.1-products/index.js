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

app.put("/active/toggle/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		product.isActive = !product.isActive;
		await product.save();
		res.status(201).send(product);
	} catch (e) {
		res.status(500).send("User not found");
	}
});

app.put("/discount/:id", async (req, res) => {
	try {
		const newDiscount = req.body.discount;
		await validateDiscount(newDiscount);
		const product = await Product.findById(req.params.id);
		product.details.discount = newDiscount;
		await product.save();
		res.status(201).send(product);
	} catch (e) {
		res.status(500).send(e);
	}
});

app.delete("/delete/:id", async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) return res.status(404).send("user not found");
		res.send(product);
	} catch (e) {
		res.status(500).send();
	}
});

app.delete("/deleteAll", async (req, res) => {
	try {
		const products = await Product.deleteMany({});
		if (products.deletedCount === 0) res.send("collection is clean");
		res.send(products);
	} catch (e) {
		res.status(500).send();
	}
});
const validateDiscount = (discount) => {
	if (discount < 0) throw new Error("discount must be positive");
};

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
