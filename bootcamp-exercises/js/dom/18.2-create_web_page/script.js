const btn = document.createElement("button");
btn.innerHTML = "CLICK HERE BRUH";
console.log(btn);
document.body.appendChild(btn);
let flag = false;
btn.addEventListener("click", () => {
	if (flag) {
		document.body.style.backgroundColor = "red";
		flag = 0;
	} else {
		btn.innerHTML = "CLICK HERE againnnnnn";
		flag = 1;
		document.body.style.backgroundColor = "green";
	}
});
