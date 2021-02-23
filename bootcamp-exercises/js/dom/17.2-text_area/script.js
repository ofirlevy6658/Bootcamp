let text = document.querySelector("textarea");
// text.innerHTML = "dasdas";
// console.log(text.innerHTML.length);
let alert = document.querySelector(".alert");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
	text.value.length > 100
		? (alert.innerHTML = "Thank you")
		: (alert.innerHTML = `Sorry you missing ${100 - text.value.length} chars`);
});
