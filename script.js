function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <div>
                <button onclick="toggleDone(this)">Done</button>
                <button class="remove" onclick="removeTask(this)">Remove</button>
            </div>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function toggleDone(button) {
    var taskText = button.parentNode.parentNode.querySelector("span");
    taskText.classList.toggle("done");
}

function removeTask(button) {
    var taskItem = button.parentNode.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
