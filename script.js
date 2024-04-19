document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", toggleTask);
            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }

    function toggleTask() {
        this.classList.toggle("completed");
    }
});
