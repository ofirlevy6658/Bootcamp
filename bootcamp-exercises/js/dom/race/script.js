const current = document.querySelectorAll(".active");

document.body.addEventListener("keyup", (e) => {
	if (e.key === "ArrowUp") {
		let current = document.querySelector(".active");
		current.classList.remove("active");
		current = current.nextElementSibling.classList.add("active");
	} else if (e.key === "ArrowDown") {
		let current = document.querySelectorAll(".active")[1];
		current.classList.remove("active");
		current = current.nextElementSibling.classList.add("active");
	}
	console.log(e.key);
});

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
	console.log(document.querySelectorAll(".active")[1]);
	document.querySelectorAll(".active")[1].classList.remove("active");
	document.querySelectorAll(".active")[0].classList.remove("active");
	document.querySelector(".a").classList.add("active");
	document.querySelector(".b").classList.add("active");
});
