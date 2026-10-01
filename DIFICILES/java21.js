const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let textoTarea = taskInput.value.trim();

    if (textoTarea !== "") {
        // 1. Creamos el elemento <li> principal
        let nuevoLi = document.createElement("li");

        // 2. Creamos un <span> para envolver el texto de la tarea
        let spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;

        // Evento para marcar como completada (al hacer clic en el texto)
        spanTexto.addEventListener("click", function() {
            nuevoLi.classList.toggle("completada");
        });

        // 3. Creamos el botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("delete-btn");

        // Evento para eliminar la tarea de la lista
        btnEliminar.addEventListener("click", function() {
            taskList.removeChild(nuevoLi);
        });

        // 4. Juntamos las piezas dentro del <li>
        nuevoLi.appendChild(spanTexto);
        nuevoLi.appendChild(btnEliminar);

        // 5. Agregamos el <li> completo a la lista <ul>
        taskList.appendChild(nuevoLi);

        // Limpiamos el input
        taskInput.value = "";
    } else {
        alert("Escribe una tarea antes de agregarla.");
    }
});