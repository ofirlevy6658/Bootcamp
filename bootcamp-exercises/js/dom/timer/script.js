let time = document.querySelector("h1");
function myTimer() {
	let counter = 0;
	time.innerHTML = `${counter}`;
	setInterval(myTimer, 1000);
}
myTimer();
