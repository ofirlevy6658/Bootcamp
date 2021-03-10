const { test } = require("@jest/globals");
const todoMethods = require("./script");

test("add task item to array", () => {
	let arr = [];
	expect(todoMethods.addItem(arr, 6105, "clean", "task1", false)).toBe(true);
	expect(todoMethods.addItem(arr, 6105, "cledsadaan", "tasdask1", false)).toBe(
		false
	);
	expect(
		todoMethods.addItem(arr, "6105", "cledsadaan", "tasdask1", false)
	).toBe(false);
	expect(todoMethods.addItem(arr, "61205", 124, "tasdask1", false)).toBe(false);
	expect(todoMethods.addItem(arr, 612205, "124", "tasdask1", "3123")).toBe(
		false
	);
});

test("delete Item", () => {
	let arr = [];
	expect(todoMethods.deleteItem(arr, "213")).toBe(false);
	expect(todoMethods.deleteItem(arr, 213)).toBe(false);
	todoMethods.addItem(arr, 6105, "clean", "task1", false);
	expect(todoMethods.deleteItem(arr, 6105)).toBe(true);
});

test("Mark as done", () => {
	let arr = [];
	expect(todoMethods.markAsDone(arr, 123)).toBe(false);
	expect(todoMethods.markAsDone(arr, "123")).toBe(false);
	todoMethods.addItem(arr, 6105, "clean", "task1", false);
	expect(todoMethods.markAsDone(arr, 6105)).toBe(true);
});

test("unmark", () => {
	let arr = [];
	expect(todoMethods.unmarkAsDone(arr, 123)).toBe(false);
	expect(todoMethods.unmarkAsDone(arr, "123")).toBe(false);
	todoMethods.addItem(arr, 6105, "clean", "task1", true);
	expect(todoMethods.unmarkAsDone(arr, 6105)).toBe(true);
});
