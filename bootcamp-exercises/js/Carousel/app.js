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

let currentImg = 0;
// const arrCarousel = ["img/lake.jpg", "img/landscape.jpg", "img/sunset.jpg"];
const arrCarousel = [c1, c2, c3];

const carouselDiv = document.querySelector(".carousel");
carouselDiv.style.backgroundImage = `url(${arrCarousel[0].src})`;

document.querySelector(".arrow-right").addEventListener("click", () => {
	currentImg++;
	if (currentImg === arrCarousel.length) currentImg = 0;
	carouselDiv.style.backgroundImage = `url(${arrCarousel[currentImg].src})`;
	document.querySelector(".img-header").textContent =
		arrCarousel[currentImg].header;
	document.querySelector(".img-sub").textContent =
		arrCarousel[currentImg].subHeader;
});

document.querySelector(".arrow-left").addEventListener("click", () => {
	currentImg--;
	if (currentImg === -1) currentImg = arrCarousel.length - 1;
	carouselDiv.style.backgroundImage = `url(${arrCarousel[currentImg].src})`;
	document.querySelector(".img-header").textContent =
		arrCarousel[currentImg].header;
	document.querySelector(".img-sub").textContent =
		arrCarousel[currentImg].subHeader;
});
