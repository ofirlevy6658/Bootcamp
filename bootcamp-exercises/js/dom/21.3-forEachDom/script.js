const users = [
	{
		id: 167464,
		firstName: "Jimmy",
		lastName: "Page",
		email: "jimmya@gmail.com",
	},
	{
		id: 578447,
		firstName: "David",
		lastName: "bowie",
		email: "gold@hotmail.com",
	},
	{
		id: 864578,
		firstName: "eric",
		lastName: "Clapton",
		email: "timmy.hotmail.com",
	},
];
const ol = document.createElement("ol");
document.body.append(ol);
users.forEach((el) => {
	const li = document.createElement("li");
	li.setAttribute("data-id", el.id);
	li.innerHTML = `${el.firstName} ${el.lastName}`;
	li.style.listStyle = "none";
	li.setAttribute("listStyle", "none");
	ol.appendChild(li);
});
