const form = document.querySelector("form[name='verify']");
const inputs = document.querySelectorAll(".box > input");
const submit = document.querySelector("input[type='submit']");

const handleInput = (e) => {
	const input = e.target;
	if (input.value && input.nextElementSibling) {
		input.nextElementSibling.focus();
	}
	if (inputs[inputs.length - 1].value) {
		submit.click();
	}
};

form.addEventListener("input", handleInput);

const handlePaste = (e) => {
	let paste = e.clipboardData.getData("text");
	console.log(inputs);

	inputs.forEach((input, index) => {
		input.value = paste[index] || "";
	});

	inputs[paste.length - 1].focus();
};
inputs[0].addEventListener("paste", handlePaste);
