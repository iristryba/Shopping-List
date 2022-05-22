var addButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

window.onload = function() {
	input.focus();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);

	input.value = "";
	input.focus();
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
	if (listItem.target.tagName === "SPAN") {
		listItem.target.classList.toggle("done");
	}
}

function deleteItem(listItem) {
	if (listItem.target.tagName === "BUTTON") {
		listItem.target.parentElement.remove();
	}
}

addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteItem);