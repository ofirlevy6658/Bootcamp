// https://cat-fact.herokuapp.com/facts
const https = require("https");

https
	.get("https://cat-fact.herokuapp.com/facts", (res) => {
		let data = [];
		const headerDate =
			res.headers && res.headers.date ? res.headers.date : "no response date";
		console.log("Status Code:", res.statusCode);
		console.log("Date in Response header:", headerDate);

		res.on("data", (chunk) => {
			data.push(chunk);
		});

		res.on("end", () => {
			console.log("Response ended: ");
			const facts = JSON.parse(Buffer.concat(data).toString());
			console.log(facts);
			facts.forEach((el, index) => {
				console.log(`${index + 1})${el.text}`);
			});
		});
	})
	.on("error", (err) => {
		console.log("Error: ", err.message);
	});
