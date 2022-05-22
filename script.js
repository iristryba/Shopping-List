let addButton = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

window.onload = function() {
	input.focus();
	input.value = "";
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");

	let spanCheckbox = document.createElement("span");
	spanCheckbox.appendChild(document.createTextNode("check_box_outline_blank"));
	spanCheckbox.classList.add("checkbox");
	spanCheckbox.classList.add("material-symbols-outlined");
		
	let spanText = document.createElement("span");
	spanText.appendChild(document.createTextNode(input.value));
	spanText.classList.add("list-text");
	
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.classList.add("delete-button");
	deleteButton.classList.add("material-symbols-outlined");

	li.appendChild(spanCheckbox);
	li.appendChild(spanText);
	li.appendChild(deleteButton);
	ul.appendChild(li);

	// reset input field
	input.value = "";
	input.focus();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

function toggleDone(listItem) {
	if (listItem.target.classList.contains("checkbox")) {
		listItem.target.firstChild.nodeValue = toggleCheckmark(listItem.target.firstChild.nodeValue);
		listItem.target.nextElementSibling.classList.toggle("done");

	}
}

function toggleCheckmark(checkmark) {
	if (checkmark === "check_box_outline_blank") {
		return "select_check_box";
	} else {
		return "check_box_outline_blank";
	}
}

function deleteItem(listItem) {
	if (listItem.target.classList.contains("delete-button")) {
		listItem.target.parentElement.remove();
	}
}

addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteItem);