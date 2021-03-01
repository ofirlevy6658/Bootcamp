function currentTime() {
	const date = new Date(); /* creating object of Date class */
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	let clock = document.querySelector("h1");
	clock.innerHTML = `${hour}:${min}:${sec}`;
	setTimeout(function () {
		currentTime();
	}, 1000); /* setting timer */
}
function updateTime(k) {
	if (k < 10) {
		return "0" + k;
	} else {
		return k;
	}
}
currentTime();
