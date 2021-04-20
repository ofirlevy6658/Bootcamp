const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/blog-api", {
	useNewUrlParser: true,
	useCreateIndex: true,
});

const User = mongoose.model("User", {
	name: {
		type: String,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	avatar: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) throw new Error("Bad email");
		},
	},
});

const Post = mongoose.model("Post", {
	headline: {
		required: true,
		type: String,
	},
	body: {
		type: String,
		required: true,
	},
	userID: {
		type: String,
		required: true,
	},
});

const Comment = mongoose.model("Comment", {
	body: {
		required: true,
		type: String,
	},
	postID: {
		type: String,
		required: true,
	},
});

async function addPost(userID, head, body) {
	const findUser = await User.findById(userID).catch((e) => {
		return console.log("user not found");
	});
	const post = await new Post({
		headline: head,
		body: body,
		userID: userID,
	})
		.save()
		.then(() => {
			console.log("post added");
		})
		.catch((error) => {
			console.log(error);
		});
}
async function addComment(postID, body) {
	const findPost = await User.findById(postID).catch((e) => {
		return console.log("post not found");
	});
	const comment = await new Comment({
		body: body,
		postID: postID,
	})
		.save()
		.then(() => {
			console.log("comment added");
		})
		.catch((error) => {
			console.log(error);
		});
}

const user1 = new User({
	name: "avi",
	age: 27,
	avatar: "avatar.com",
	email: "avi@gmail.com",
});
const user2 = new User({
	name: "ehud",
	age: 37,
	avatar: "avatar.com",
	email: "avi@gmail.com",
});
const user3 = new User({
	name: "banay",
	age: 27,
	avatar: "avatar.com",
	email: "avi@gmail.com",
});

user1
	.save()
	.then(() => {
		console.log(user1);
	})
	.catch((error) => {
		console.log(error);
	});

user2
	.save()
	.then(() => {
		console.log(user2);
	})
	.catch((error) => {
		console.log(error);
	});

user3
	.save()
	.then(() => {
		console.log(user3);
	})
	.catch((error) => {
		console.log(error);
	});

//the id should real id to make connection here every time we generate the data again the id not relavante
addPost(
	"607ea5400e968b1768fe0440",
	"I love Cats",
	"Kittens are the definition of cuteness"
);
addPost(
	"607ea5400e968b1768fe0441",
	"I love reddit",
	"yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
);

addComment("607eab44bebafc481c2a513b", "yea I also like cat bruhhhhh");
addComment(
	"607ea5400e968b1768fe0441",
	"PINK FLOYD ROCKS MOTHERFAC%!ecsax@!$*x (SOMTHING Explicit)"
);
