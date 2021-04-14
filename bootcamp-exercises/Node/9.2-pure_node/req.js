const http = require("http");
const userJson = JSON.stringify(require("./users.json"));
const fs = require("fs");
const path = require("path");

// const index = require('./index.html');

// Create a server object
http
	.createServer(function (req, res) {
		// http header
		res.writeHead(200, { "Content-Type": "text/html" });

		var url = req.url;

		if (url === "text/html") {
			res.write(" Welcome to about us page");
			res.end();
		} else if (url === "/users") {
			res.writeHead(200, { "Content-Type": "application/json" });

			res.write(userJson);
			res.end();
		} else if (url === "/style.css") {
			res.writeHead(200, { "Content-Type": "text/css" });
			fs.readFile(
				path.join(__dirname, "./style.css"),
				null,
				function (error, data) {
					if (error) {
						res.writeHead(404);
						res.write("File not found!");
					} else {
						res.write(data);
					}
					res.end();
				}
			);
		} else if (url === "/script.js") {
			res.writeHead(200, { "Content-Type": "text/javascript" });
			fs.readFile(
				path.join(__dirname, "./script.js"),
				null,
				function (error, data) {
					if (error) {
						res.writeHead(404);
						res.write("File not found!");
					} else {
						res.write(data);
					}
					res.end();
				}
			);
		} else if (url === "/users") {
			res.writeHead(200, { "Content-Type": "application/json" });

			res.write(userJson);
			res.end();
		} else {
			fs.readFile(
				path.join(__dirname, "./index.html"),
				null,
				function (error, data) {
					if (error) {
						res.writeHead(404);
						res.write("File not found!");
					} else {
						res.write(data);
					}
					res.end();
				}
			);
		}
	})
	.listen(3000, function () {
		// The server object listens on port 3000
		console.log("server start at port 3000");
	});
