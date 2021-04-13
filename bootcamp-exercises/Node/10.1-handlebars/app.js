const path = require("path");
const express = require("express");
const usersJson = require("./users.json");

const app = express();
const publicDirPath = path.join(__dirname, "public");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("/raw", (req, res) => {
	res.render("raw", {
		name: "ofir",
		last: "levy",
	});
});
app.get("/users", (req, res) => {
	res.send(usersJson);
});
app.get("*", (req, res) => {
	res.render("index", {
		name: "ofir",
		last: "levy",
	});
});
app.listen(3000, () => {
	console.log(`server is up on port 3000`);
});
