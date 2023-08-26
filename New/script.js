document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("myInput");
  // const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const pendingTasks = document.getElementById("pendingTasks");
  const clearButton = document.getElementById("clearButton");

  // addButton.addEventListener("click", addTask);
  // taskList.addEventListener('click', taskAction); //ul
  clearButton.addEventListener("click", clearAllTasks);


});



function taskAction(event, type) {
  const target = event.target
  const strike = target.parentElement.parentElement.parentElement.childNodes[1].classList = 'strike-off'
  if (type === 'completed') {
    console.log("Clicked:", strike);
    target.classList.toggle("strike-off");
    /***** */
    // const taskItem = target.closest(".task");
    // console.log("TaskItem", taskItem);

    // taskItem.classList.toggle("completed");

    // const taskText = taskItem.querySelector(".task-text");
    // console.log("TaskText", taskText);

    
    // updatePendingTasks();

    updatePendingTasks();
  } else if (type === 'delete') {
    console.log("Delete clicked");
    target.parentElement.parentElement.parentElement.remove()
    updatePendingTasks();
  }
}

function addTask(event) {
  const InputBtn = document.querySelector("#myInput");

  const taskText = InputBtn.value;

  
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
          <div class="checkDelete">
            <button class="complete-button" onclick="taskAction(event, 'completed')" ><i class="fa fa-check"></i></button>
            <button class="delete-button" onclick="taskAction(event, 'delete')" ><i class="fa fa-trash"></i></button>
          <div>
      `;
    // if (taskList.children.length >= 4) {
    //     taskList.removeChild(taskList.firstElementChild); // Remove the first added task
    //   }

    taskList.appendChild(taskItem);
    InputBtn.value = "";
    updatePendingTasks();
  }
}


function updatePendingTasks() {
  const tasks = document.querySelectorAll(".task:not(.completed)");
  pendingTasks.textContent = tasks.length;
}


function clearAllTasks() {
  const completedTasks = document.querySelectorAll(".task");
  console.log("QUERY SELECTOR ", completedTasks);
  
  for (let i = 0; i < completedTasks.length; i++) {
    const task = completedTasks[i];
    task.remove();
  }
  
  updatePendingTasks();
}