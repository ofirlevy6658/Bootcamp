const yargs = require("yargs");

// yargs.version("1.1.0");

// yargs.command({
// 	command: "calc",
// 	describe: "calculactor",
// 	builder: {
// 		add: {
// 			type: "Integer",
// 		},
// 		sub: {
// 			type: "string",
// 		},
// 	},
// 	handler: function (argv) {
// 		console.log(argv.add);
// 		console.log(argv.sub);
// 	},
// });

const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);
switch (process.argv[2]) {
	case "-add":
		console.log(a + b);
		break;
	case "-sub":
		console.log(a - b);
		break;
	case "-mult":
		console.log(a * b);
		break;
	case "-pow":
		console.log(a ** 2);
		break;
	default:
		console.log("wrong commend");
}

yargs.parse();
