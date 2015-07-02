//Problem : user interation does not provide desired result
//Solution: add interactivity so that user can manage daily task
var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incompleteTasks
var completedTasksHolder = document.getElementById("completed-tasks");  // completedTasks

// new Task list item
var createNewTaskElement = function (taskString){
	// create list item
	var listItem = document.createElement("li");

	// input checkbox
	var checkBox = document.createElement("input");
		// label
	var label = document.createElement("label");
		// input(text)
	var editInput = document.createElement("input");
		// button.edit
	var editButton = document.createElement("button");
		// button.delete
	var deleteButton = document.createElement("button");
		// Each element, need modified
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText ="Edit";
	editButton.className = "edit";

	deleteButton.innerText= "Delete";
	deleteButton.className= "delete";
	label.innerText = taskString;

		// Eeach element, need append
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}


//Add a new task
var addTask = function(){
	console.log("Add tasks...");
	// Create a new list item with the text from #new-task
	var listItem = createNewTaskElement(taskInput.value);

	// append listItem to incompleteTaskHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);

	taskInput.value = "";

}

//Edit an existing task
var editTask = function(){
	console.log("Etid tasks...");
	var listItem = this.parentNode; //this is the button that triggers this evenHandler

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains('editMode');
		// If the class of the parent is .editMode
		if (containsClass){
			// Switch from .editMode
			// Make the label become the input's value
			label.innerText = editInput.value;
		}else{
			editInput.value = label.innerText;
		}

		// else
			//Switch to .editMode
				//input value become the label's text

		// Toggle .editMode on the list item
		listItem.classList.toggle("editMode");
}

// Delete an existing task
var deleteTask = function(){
	console.log("Delete task ...");

	// Remove the parent list item from the ul
	var listItem = this.parentNode;
	var ul = ul = listItem.parentNode;

	// Remove child from parent element
	ul.removeChild(listItem);
}
//Mark a task as complete
var taskCompleted = function(){
	console.log("task Completed...");
	// When ccheckbox is checked
		// append task list item to the #complete-task
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function(){
	console.log("Task incompleted...");
	// When the checkbox is unchecked
		// append to #incomplete
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");
	// Select taskListItem's children
	var checkBox =taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		// bind editAsk to edit button
		editButton.onclick = editTask;
		// bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		// bind checkboxEventHandler to checkbox
		checkBox.onchange = checkBoxEventHandler;


}


var ajaxRequest = function(){
	console.log("AJAX request");
}

// Set the click handler to the addTAsk function

addButton.addEventListener("click", addTask);
addButton.addEventListener("click",ajaxRequest);


// Cycle over incompleteTaskHolder ul list items
for(var i = 0 ; i < incompleteTasksHolder.children.length; i++){
	// bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i],taskCompleted);
}


// Cycle over completedTaskHolder ul list items
for(var i = 0 ; i < completedTasksHolder.children.length; i++){
	// bind events to list item's children (taskIncompleted)
	bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}





