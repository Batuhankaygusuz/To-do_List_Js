let taskInput = document.getElementById("task");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Sil</button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = "";

    let deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });
  }
  const clearAllButton = document.getElementById("clearAll");
  clearAllButton.addEventListener("click", () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  });
});
