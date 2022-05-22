// Using the Shopping List files from the previous videos update the shopping list app
// to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its
// corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button
// next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);


	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(listItem) {
	if (listItem.target.tagName !== "BUTTON") {
		listItem.target.classList.toggle("done");
	}
}

function deleteItem(listItem) {
	if (listItem.target.tagName === "BUTTON") {
		listItem.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteItem);