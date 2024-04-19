function addTask() {
  const inputField = document.getElementById("taskInput");
  const taskText = inputField.value.trim();

  if (!taskText) {
    alert("Please ente a valid task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const taskRow = createTaskElement(taskText, false);

  taskList.appendChild(taskRow);
  inputField.value = "";

  saveTasks();
}

function createTaskElement(taskText, completed) {
  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");

  taskRow.appendChild(createTaskCheckbox(completed));
  taskRow.appendChild(createTaskText(taskText));
  taskRow.appendChild(createDeleteButton(taskRow));

  taskRow.addEventListener("click", function () {
    taskRow.classList.toggle("completed");
    taskRow.querySelector('input[type="checkbox"]').checked =
      taskRow.classList.contains("completed");
    saveTasks();
  });

  return taskRow;
}

function createTaskCheckbox(completed) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  return checkbox;
}

function createTaskText(text) {
  const textElement = document.createElement("div");
  textElement.textContent = text;
  textElement.classList.add("task-text");
  return textElement;
}

function createDeleteButton(row) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    row.remove();
    saveTasks();
  };
  return deleteButton;
}

function saveTasks() {
  const taskRows = document.querySelectorAll(".task-row");
  const tasks = [];

  taskRows.forEach(function (taskRow) {
    const taskTextElement = taskRow.querySelector(".task-text");
    const text = taskTextElement.textContent;
    const completed = taskRow.classList.contains("completed");

    tasks.push({ text, completed });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (!saveTasks) return;

  const tasks = JSON.parse(savedTasks);
  const taskList = document.getElementById("taskList");

  tasks.forEach(function ({ text, completed }) {
    const taskRow = createTaskElement(text, completed);
    taskList.appendChild(taskRow);
  });
}

loadTasks();
