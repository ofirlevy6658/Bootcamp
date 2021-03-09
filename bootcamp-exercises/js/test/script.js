const arr = [];

function addItem(id, task, name, isCompleted) {
	const exist = arr.find((el) => el.id == id);
	if (exist) return false;
	arr.push({ id, task, name, isCompleted });
	return true;
}

function deleteItem(id) {
	const exist = arr.find((el) => el.id == id);
	if (exist) {
		arr.splice(arr.indexOf(exist), 1);
		return true;
	}
	return false;
}
function markAsDone(id) {
	const exist = arr.find((el) => el.id == id);
	if (exist) {
		exist.isCompleted = true;
		return true;
	}
	return false;
}
function unmarkAsDone(id) {
	const exist = arr.find((el) => el.id == id);
	if (exist) {
		exist.isCompleted = false;
		return true;
	}
	return false;
}

function status() {
	const tasks = [];
	arr.forEach((el) => {
		if (el.isCompleted)
			tasks.push({ name: el.name, completed: el.isCompleted });
		else tasks.unshift({ name: el.name, completed: el.isCompleted });
	});
	return tasks;
}

// addItem(123, 2, 2, false);
// addItem(12, 2, 2, true);
// addItem(12, 2, 2, true);
// console.log(arr);
// deleteItem(123, 2, 2, true);
// console.log(arr);
addItem(6105, "finish hw", "hw", true);
addItem(214, "dog food", "food", false);
addItem(5125, "dsafsa, fsafas fas", "tv", true);
addItem(61245, "finisdsadsah hdsaw", "brush", false);
console.log(status());
