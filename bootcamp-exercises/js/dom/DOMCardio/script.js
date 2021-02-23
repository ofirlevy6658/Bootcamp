//1
const div = document.createElement("div");
div.className = "wrapper";
document.body.appendChild(div);
//
//2
//option one
// const ul = document.createElement("ul");
// div.appendChild(ul);
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// li1.innerHTML = "One";
// li2.innerHTML = "two";
// li3.innerHTML = "three";
// ul.appendChild(li1).appendChild(li2).appendChild(li3);
//
//* option 2
const ul = `<ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>`;
div.innerHTML = ul;

//3
// const img = `<img class="cute" alt="cute" width="250" src="https://cf.ltkcdn.net/dogs/images/std/236742-699x450-cutest-puppy-videos.jpg>`;
const img = document.createElement("img");
img.src =
	"https://cf.ltkcdn.net/dogs/images/std/236742-699x450-cutest-puppy-videos.jpg";
img.alt = "cute pupy";
img.width = 250;
img.class = "cute";
div.appendChild(img);

//4
const ulElement = div.querySelector("ul");
console.log(ulElement);
const html = `<div class="myDiv"><p class="warning"></p>p1<p>p2</p></div`;
ulElement.insertAdjacentHTML("beforebegin", html);
document.querySelector(".warning").nextElementSibling.remove();

//5
const generatePlayerCard = (name, age, height) => {
	const html = `<div>
    <h2>${name}-${age}</h2>
    <p>They are ${height} and ${age} years old. in Dog years this person would be ${
		7 * age
	} </p>
    <button class="delete" type="button">delete</button>
    </div>
    `;
	return html;
};

const cards = document.createElement("div");
cards.classList.add(".cards");
const cardHTML =
	generatePlayerCard("ofir", 99, 100) +
	generatePlayerCard("dani", 69, 420) +
	generatePlayerCard("komi", 51, 42);
cards.innerHTML = cardHTML;
div.insertAdjacentElement("beforebegin", cards);

const buttons = document.querySelectorAll(".delete");
const del = (e) => {
	const click = e.currentTarget;
	click.parentElement.remove();
};

buttons.forEach((button) => button.addEventListener("click", del));
