let text = document.querySelector("input");
const btn = document.querySelector("button");
let smiles = document.querySelector(".smile");
const src = `http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg`;

btn.addEventListener("click", () => {
	if (isNaN(text.value)) {
		smiles.innerHTML = "<h1>Wrong input</h1>";
	} else {
		text.value > 0 ? (smiles.innerHTML = "") : null;
		for (let i = 0; i < text.value; i++) {
			let img = document.createElement("img");
			img.src = src;
			smiles.append(img);
		}
	}
});
