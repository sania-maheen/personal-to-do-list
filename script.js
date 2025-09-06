const tasksList = document.getElementById("tasks-list");
const taskInput = document.getElementById("task-input");

function addTask() {

    if (taskInput.value.trim() === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        tasksList.appendChild(li);

        let removeBtn = document.createElement("span");
        removeBtn.textContent = "\u00d7"; // cross symbol
        li.appendChild(removeBtn);
    }

    taskInput.value = "";
    saveTasks();
}

tasksList.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }

});

function saveTasks() {
    localStorage.setItem("tasksData", tasksList.innerHTML);
}

function loadTasks() {
    const data = localStorage.getItem("tasksData");
    if (data) {
        tasksList.innerHTML = data;
    }
}

loadTasks();
