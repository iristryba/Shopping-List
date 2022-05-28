let input = document.getElementById("userinput");
let inputListItem = document.getElementById("input-list-item");
let activeList = document.getElementById("active-list");
let inactiveList = document.getElementById("inactive-list");
let editableItems = document.querySelectorAll(".editable");

window.onload = function() {
	resetToInput();
}

function inputLength() {
	return input.value.length;
}

function resetToInput() {
	input.focus();
	input.value = "";
}

function createListElement() {
	let li = document.createElement("li");
	li.classList.add("flex", "flex-row", "p-1.5", "gap-1", "items-center", "border-2", "border-slate-700", "border-solid", "rounded", "group", "hover:bg-sky-700");

	let spanCheckbox = document.createElement("span");
	spanCheckbox.appendChild(document.createTextNode("check_box_outline_blank"));
	spanCheckbox.classList.add("checkbox", "material-symbols-outlined", "hover:cursor-pointer");
		
	let spanText = document.createElement("span");
	spanText.appendChild(document.createTextNode(input.value));
	spanText.classList.add("editable", "list-text", "hover:cursor-text");
	spanText.contentEditable="true";
	
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.classList.add("delete-button", "material-symbols-outlined", "ml-auto", "invisible", "group-hover:visible", "hover:cursor-pointer");

	const inputField = activeList.removeChild(inputListItem);
	li.appendChild(spanCheckbox);
	li.appendChild(spanText);
	li.appendChild(deleteButton);
	activeList.appendChild(li);
	activeList.appendChild(inputField);

	spanText.addEventListener('keypress', finishEditOnEnter);

	resetToInput();
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

function toggleStatusDone(e) {
	if (e.target.classList.contains("checkbox")) {
		e.target.firstChild.nodeValue = toggleCheckmark(e.target.firstChild.nodeValue);
		e.target.nextElementSibling.classList.toggle("line-through");

		toggleList(e.target.parentElement, e.target.parentElement.parentElement);

		resetToInput();
	}
}

function toggleCheckmark(checkmark) {
	if (checkmark === "check_box_outline_blank") {
		return "select_check_box";
	} else {
		return "check_box_outline_blank";
	}
}

function toggleList(element, list) {
	list.removeChild(element);
	element.classList.toggle("hover:text-slate-50");
	if (list.id === "inactive-list") {
		activeList.removeChild(inputListItem);
		activeList.appendChild(element);
		activeList.appendChild(inputListItem);
	} else {
		inactiveList.appendChild(element);
	}
}

function deleteItem(e) {
	if (e.target.classList.contains("delete-button")) {
		e.target.parentElement.remove();
		resetToInput();
	}
}

function finishEditOnEnter(e) {
	if (e.key === "Enter") {
        e.preventDefault();
        input.focus();
    }
}

input.addEventListener("keypress", addListAfterKeypress);
activeList.addEventListener("click", toggleStatusDone);
activeList.addEventListener("click", deleteItem);
inactiveList.addEventListener("click", toggleStatusDone);
inactiveList.addEventListener("click", deleteItem);
editableItems.forEach(editableItem =>
	editableItem.addEventListener('keypress', finishEditOnEnter)
);

// page events
// window.addEventListener('beforeunload', function (e) {
// 	return e.preventDefaactiveListt();
// });