class Carousel {
	constructor(id, src, header, subHeader) {
		this.id = id;
		this.src = src;
		this.header = header;
		this.subHeader = subHeader;
	}
}
const c1 = new Carousel(1, "img/lake.jpg", "Img one", "the lake");
const c2 = new Carousel(1, "img/landscape.jpg", "Img two", "landscape");
const c3 = new Carousel(1, "img/sunset.jpg", "Img three", "sunset");
const arrCarousel = [c1, c2, c3];
let currentImg = 0; //state
//
const carouselDiv = document.querySelector(".carousel");
carouselDiv.style.backgroundImage = `url(${arrCarousel[0].src})`;
document.querySelector(".arrow-right").addEventListener("click", moveRight);

function moveRight() {
	currentImg++;
	if (currentImg === arrCarousel.length) currentImg = 0;
	carouselDiv.style.backgroundImage = `url(${arrCarousel[currentImg].src})`;
	document.querySelector(".img-header").textContent =
		arrCarousel[currentImg].header;
	document.querySelector(".img-sub").textContent =
		arrCarousel[currentImg].subHeader;
	setTimeout(moveRight, 5000);
}

document.querySelector(".arrow-left").addEventListener("click", moveLeft);

function moveLeft() {
	currentImg--;
	if (currentImg === -1) currentImg = arrCarousel.length - 1;
	carouselDiv.style.backgroundImage = `url(${arrCarousel[currentImg].src})`;
	document.querySelector(".img-header").textContent =
		arrCarousel[currentImg].header;
	document.querySelector(".img-sub").textContent =
		arrCarousel[currentImg].subHeader;
}

moveRight();
