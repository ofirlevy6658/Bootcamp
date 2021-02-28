const row1 = document.querySelectorAll(".row1 img");
const row2 = document.querySelectorAll(".row2 img");

let flag = true;
let flag2;
document.querySelectorAll(".move").forEach((el) => {
	el.addEventListener("click", () => {
		if (el.classList.contains("up")) {
			let counter = 1;
			if (flag) {
				row1.forEach((el) => {
					el.src = `img/carousel-items/s${counter}.jpg`;
					counter++;
				});
				flag = false;
			} else {
				row1.forEach((el) => {
					el.src = `img/carousel-items/${counter}.jpg`;
					counter++;
				});
				flag = true;
			}
		} else {
			let counter2 = 6;
			if (flag) {
				row2.forEach((el) => {
					el.src = `img/carousel-items/s${counter2}.jpg`;
					counter2++;
				});
				flag = false;
			} else {
				row2.forEach((el) => {
					el.src = `img/carousel-items/${counter2}.jpg`;
					counter2++;
				});
				flag = true;
			}
		}
	});
});
