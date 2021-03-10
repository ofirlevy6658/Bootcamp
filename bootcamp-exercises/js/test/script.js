function addItem(arr, id, task, name, isCompleted) {
	if (
		isNaN(id) ||
		typeof task !== "string" ||
		typeof name !== "string" ||
		typeof isCompleted !== "boolean"
	) {
		return false;
	}
	const exist = arr.find((el) => el.id == id);
	if (exist) return false;
	arr.push({ id, task, name, isCompleted });
	return true;
}

function deleteItem(arr, id) {
	if (isNaN(id)) {
		return false;
	}
	const exist = arr.find((el) => el.id == id);
	if (exist) {
		arr.splice(arr.indexOf(exist), 1);
		return true;
	}
	return false;
}
function markAsDone(arr, id) {
	const exist = arr.find((el) => el.id == id);
	if (exist) {
		exist.isCompleted = true;
		return true;
	}
	return false;
}
function unmarkAsDone(arr, id) {
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
module.exports = { addItem, deleteItem, markAsDone, unmarkAsDone, status };
