const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let textoTarea = taskInput.value;

    if (textoTarea.trim() !== "") {
        
        let nuevoLi = document.createElement("li");

        nuevoLi.textContent = textoTarea;

        taskList.appendChild(nuevoLi);

        taskInput.value = "";
        
    } else {
        alert("Por favor, escribe una tarea válida.");
    }
});