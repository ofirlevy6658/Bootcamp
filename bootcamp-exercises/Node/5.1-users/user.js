const validator = require("email-validator");
const fs = require("fs");
const uniqid = require("uniqid");

const createUser = (userData) => {
	const user = {
		id: uniqid(),
		name: userData.name,
		email: userData.email,
		password: userData.password,
	};
	if (user.password.length < 6) {
		console.log("weak password min 6 chars");
		return;
	}
	if (!validator.validate(user.email)) {
		console.log("wrong email please try again");
		return;
	}
	const usersArr = loadUsers();
	//email already in db
	if (usersArr.length > 0) {
		const duplicate = usersArr.find((el) => el.email === user.email);
		if (duplicate) {
			console.log("this email already taken");
			return;
		}
	}
	usersArr.push(user);
	saveUsers(usersArr);
	console.log("user added");
};

const readUser = (email, pass) => {
	const users = loadUsers();
	const findUser = users.find((el) => el.email === email);
	if (!findUser) {
		console.log("user not found");
		return;
	}
	if (findUser.password === pass) {
		console.log(findUser);
	} else console.log("wrong password");
};

const deleteUser = (id) => {
	const users = loadUsers();
	const usersUpdate = users.filter((el) => el.id !== id);
	if (usersUpdate.length === users.length) console.log("user not found");
	else {
		saveUsers(usersUpdate);
		console.log("user deleted");
	}
};

const updateUser = (user) => {
	const users = loadUsers();
	const findUser = users.find((el) => el.id === user.id);
	if (!findUser) {
		console.log("user not found");
	} else {
		findUser.email = user.email;
		findUser.password = user.password;
		findUser.name = user.name;
	}
	saveUsers(users);
	console.log("user updated");
};

const saveUsers = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
	try {
		const dataBuffer = fs.readFileSync("users.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = { createUser, readUser, updateUser, deleteUser };
