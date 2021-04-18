const utils = require("./utils");
var cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

app.use(express.json());

app.post("/api/user", (req, res) => {
	try {
		utils.addUser(req.body);
		res.status(201).send("User added");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.put("/api/deposit/:id", (req, res) => {
	try {
		utils.deposit(req.params.id, req.body);
		res.status(201).send("user cash update");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.put("/api/credit/:id", (req, res) => {
	try {
		utils.updateCredit(req.params.id, req.body);
		res.status(201).send("user credit update");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.put("/api/withdraw/:id", (req, res) => {
	try {
		utils.withdraw(req.params.id, req.body);
		res.status(201).send("withdraw succeed");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.put("/api/transferMoney/:id", (req, res) => {
	try {
		utils.transferMoney(req.params.id, req.body);
		res.status(201).send("transfer money succeed");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});
app.get("/api/user/:id", (req, res) => {
	try {
		const userInfo = utils.getUser(req.params.id);
		res.status(200).send(userInfo);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.get("/api/users", (req, res) => {
	try {
		res.status(200).send(utils.getUsers());
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

app.get("/api/users/filter/amount", (req, res) => {
	try {
		const users = utils.filterByMoney(req.body);
		res.status(200).send(users);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});
app.put("/api/deactivate/:id", (req, res) => {
	try {
		utils.deactivate(req.params.id);
		res.status(200).send("User has been disabled");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});
app.put("/api/active/:id", (req, res) => {
	try {
		utils.active(req.params.id);
		res.status(200).send("User back to active");
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});
app.get("/api/activeUsers", (req, res) => {
	try {
		res.status(200).send(utils.getActiveUsers());
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log("listening on port 3000");
});
