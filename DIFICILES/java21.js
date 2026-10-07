const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let textoTarea = taskInput.value.trim();

    if (textoTarea !== "") {
        let nuevoLi = document.createElement("li");

        let spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;

        spanTexto.addEventListener("click", function() {
            nuevoLi.classList.toggle("completada");
        });

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("delete-btn");

        btnEliminar.addEventListener("click", function() {
            taskList.removeChild(nuevoLi);
        });

        nuevoLi.appendChild(spanTexto);
        nuevoLi.appendChild(btnEliminar);

        taskList.appendChild(nuevoLi);

        taskInput.value = "";
    } else {
        alert("Escribe una tarea antes de agregarla.");
    }
});