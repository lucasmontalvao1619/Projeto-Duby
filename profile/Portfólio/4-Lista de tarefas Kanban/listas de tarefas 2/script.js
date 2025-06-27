function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const task = document.getElementById(data);
  const column = ev.target.closest(".column");
  column.appendChild(task);
  updateCardStyle(task, column.id);
  saveTasks();
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();
  if (description === "") return;

  const taskId = "task-" + Date.now();
  const taskCard = document.createElement("div");
  taskCard.className = "task-card open";
  taskCard.draggable = true;
  taskCard.id = taskId;
  taskCard.ondragstart = drag;
  taskCard.innerHTML = `
    ${description}
    <button class="remove-btn" onclick="removeTask('${taskId}')">X</button>
  `;

  document.getElementById("open").appendChild(taskCard);
  taskInput.value = "";
  saveTasks();
}

function removeTask(id) {
  const task = document.getElementById(id);
  task.remove();
  saveTasks();
}

function updateCardStyle(card, columnId) {
  card.className = "task-card " + columnId;
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task-card").forEach(card => {
    tasks.push({
      id: card.id,
      content: card.innerText.replace("X", "").trim(),
      column: card.parentElement.id
    });
  });
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
  tasks.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card " + task.column;
    taskCard.draggable = true;
    taskCard.id = task.id;
    taskCard.ondragstart = drag;
    taskCard.innerHTML = `
      ${task.content}
      <button class="remove-btn" onclick="removeTask('${task.id}')">X</button>
    `;
    document.getElementById(task.column).appendChild(taskCard);
  });
}

window.onload = loadTasks;
