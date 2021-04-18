const { v4: uuidv4 } = require("uuid"); // generate uniqe id
const fs = require("fs");

function addUser({ cash = 0, credit = 0 }) {
	// deafult value of 0 if not provided
	if (cash > 999999 || cash < 0 || credit > 5000 || credit < 0)
		throw new Error("bad parameters");
	const user = { cash, credit, id: uuidv4(), isActive: true };
	const users = loadUsers();
	users.push(user);
	saveUser(users);
}

function deposit(id, { amount }) {
	console.log(amount);
	validationMoney(amount);
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	checkUser(user);
	const newCash = parseInt(user.cash) + parseInt(amount);
	user.cash = newCash;
	saveUser(users);
}

function updateCredit(id, { amount }) {
	validationMoney(amount);
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	checkUser(user);
	const newCredit = parseInt(user.credit) + parseInt(amount);
	user.credit = newCredit;
	saveUser(users);
}

function withdraw(id, { amount }) {
	validationMoney(amount);
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	checkUser(user);
	if (!isPossibleWithdraw(user, amount))
		throw new Error(`withdraw rejected, not enough money`);
	user.cash = parseInt(user.cash) - parseInt(amount);
	console.log(user.cash);
	saveUser(users);
}

function transferMoney(senderID, { amount, id }) {
	validationMoney(amount);
	const users = loadUsers();
	const reciver = users.find((el) => el.id === id);
	const sender = users.find((el) => el.id === senderID);
	checkUser(reciver);
	checkUser(sender);
	if (reciver === sender) throw new Error("sender and reciver are the same");
	if (!isPossibleWithdraw(sender, amount))
		throw new Error(`transfer money rejected not enough money in the account`);
	sender.cash = parseInt(sender.cash) - parseInt(amount);
	reciver.cash = parseInt(reciver.cash) + parseInt(amount);
	saveUser(users);
}

function isPossibleWithdraw(user, amount) {
	const userCurrentMoney = parseInt(user.cash) + parseInt(user.credit);
	if (userCurrentMoney >= parseInt(amount)) {
		return true;
	}
	return false;
}
function getUser(id) {
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	if (!user) throw new Error("User not found");
	return user;
}
function getUsers() {
	const users = loadUsers();
	return users;
}
function filterByMoney({ amount }) {
	validationMoney(amount);
	const users = loadUsers();
	const filterUsers = users.filter((el) => el.cash >= amount);
	return filterUsers;
}
function deactivate(id) {
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	if (!user) throw new Error("User not found");
	if (!user.isActive) throw new Error("User already deactivate");
	else user.isActive = false;
	saveUser(users);
}

function active(id) {
	const users = loadUsers();
	const user = users.find((el) => el.id === id);
	if (!user) throw new Error("User not found");
	if (user.isActive) throw new Error("User already active");
	else user.isActive = true;
	saveUser(users);
}
function getActiveUsers() {
	const users = loadUsers();
	const activeUsers = users.filter((el) => el.isActive);
	return activeUsers;
}

function validationMoney(amount) {
	if (!amount) throw new Error("parameter amount not provided");
	if (amount < 1) throw new Error("parameter must be positive");
}
function checkUser(user) {
	if (!user) throw new Error("User not found");
	if (!user.isActive) throw new Error("User is not active");
}

function saveUser(user) {
	fs.writeFileSync("./database/users.json", JSON.stringify(user));
}

function loadUsers() {
	try {
		const dataBuffer = fs.readFileSync("./database/users.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}

module.exports = {
	addUser,
	deposit,
	updateCredit,
	withdraw,
	validationMoney,
	transferMoney,
	getUser,
	getUsers,
	filterByMoney,
	deactivate,
	active,
	getActiveUsers,
};
