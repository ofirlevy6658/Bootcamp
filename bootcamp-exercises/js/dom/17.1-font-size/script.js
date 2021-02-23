const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const text = document.querySelector("p");
let size = 16;

const minusFont = () => {
	size >= 7 ? size-- : null;
	text.style.fontSize = `${size}px`;
};
const plusFont = () => {
	size <= 99 ? size++ : null;
	text.style.fontSize = `${size}px`;
};

minusBtn.addEventListener("click", minusFont);
plusBtn.addEventListener("click", plusFont);
