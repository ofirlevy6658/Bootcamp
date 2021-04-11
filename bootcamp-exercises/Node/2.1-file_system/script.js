const fs = require("fs");

fs.writeFileSync("note.txt", "this is my first txt file ");
fs.copyFileSync("note.txt", "copyNote.txt");
fs.renameSync("copyNote.txt", "blabla.txt");
fs.readdirSync("./").forEach((file) => {
	console.log(file);
});
fs.mkdirSync("ho dir ho dirrrrrrrrr");
