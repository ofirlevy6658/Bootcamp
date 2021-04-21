const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/Products", {
	useNewUrlParser: true,
	useCreateIndex: true,
});

const Product = mongoose.model("Product", {
	name: {
		type: String,
		required: true,
		unique: true,
	},
	category: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
	},
	details: {
		description: {
			type: String,
			required: true,
			validate(value) {
				if (value.length < 9)
					throw new Error("Description must contain at least 10 characters");
			},
		},
		price: {
			type: Number,
			required: true,
			validate(value) {
				if (value < 1) throw new Error("Price must be positive");
			},
		},
		discount: {
			type: Number,
			default: 0,
		},
		images: {
			type: Array,
			required: true,
			validate(value) {
				if (value.length < 2) {
					throw new Error("Must contain 2 images at least");
				}
			},
		},
		date: {
			type: Date,
			default: Date.now(),
		},
		phone: {
			type: String,
			required: true,
			validate(value) {
				if (!validator.isMobilePhone(value, ["he-IL"]))
					throw new Error("The phone number is not valid");
			},
		},
	},
});

// const pc = new Product({
// 	name: "gamer pc",
// 	category: "gaming",
// 	isActive: true,
// 	details: {
// 		description: "gaming pc with new graphic card",
// 		price: 5000,
// 		discount: 270,
// 		images: ["img1", "img2"],
// 		phone: "0528846397",
// 	},
// });

// pc.save()
// 	.then(() => {
// 		console.log(pc);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// const car = new Product({
// 	name: "mazda 3012451213",
// 	category: "electronic cars",
// 	isActive: true,
// 	details: {
// 		description: "new fking car!!!!!!!! without discount dlsaodkoasko dsa",
// 		price: 9001,
// 		images: ["img1", "img2"],
// 		phone: "0545978653",
// 	},
// });

// car
// 	.save()
// 	.then(() => {
// 		console.log(car);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// const mario = new Product({
// 	name: "new switch mario",
// 	category: "mario",
// 	isActive: true,
// 	details: {
// 		description: "MARIOooooooooooooooooooo",
// 		price: 1234,
// 		discount: 233,
// 		images: ["img1", "img2"],
// 		phone: "0521569456",
// 	},
// });

// mario
// 	.save()
// 	.then(() => {
// 		console.log(mario);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

module.exports = Product;
