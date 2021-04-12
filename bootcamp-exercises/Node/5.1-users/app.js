const yargs = require("yargs");
const { createUser, readUser, updateUser, deleteUser } = require("./user");

yargs.command({
	command: "create",
	describe: "create account",
	builder: {
		name: {
			describe: "name",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "email",
			demandOption: true,
			type: "string",
		},
		password: {
			describe: "pass",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		createUser(argv);
	},
});

yargs.command({
	command: "read",
	describe: "read the user, user should provide email and pass",
	builder: {
		email: {
			describe: "user Email",
			demandOption: true,
			type: "string",
		},
		password: {
			describe: "user password",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		readUser(argv.email, argv.password);
	},
});

yargs.command({
	command: "read",
	describe: "read the user, user should provide email and pass",
	builder: {
		email: {
			describe: "user Email",
			demandOption: true,
			type: "string",
		},
		password: {
			describe: "user password",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		readUser(argv.email, argv.password);
	},
});

yargs.command({
	command: "update",
	describe: "update the user, user should provide id name email and pass ",
	builder: {
		id: {
			describe: "user ID",
			demandOption: true,
			type: "string",
		},
		name: {
			describe: "name",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "email",
			demandOption: true,
			type: "string",
		},
		password: {
			describe: "pass",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		updateUser(argv);
	},
});

yargs.command({
	command: "delete",
	describe: "update the user, user should provide id name email and pass ",
	builder: {
		id: {
			describe: "user ID",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		deleteUser(argv.id);
	},
});
yargs.parse();
