const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");

let filtroActual = "todas";

addTaskBtn.addEventListener("click", function() {
    let textoTarea = taskInput.value.trim();

    if (textoTarea !== "") {
        let nuevoLi = document.createElement("li");

        let spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;

        spanTexto.addEventListener("click", function() {
            nuevoLi.classList.toggle("completada");
            aplicarFiltro(filtroActual); 
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
        aplicarFiltro(filtroActual); 
    } else {
        alert("Escribe una tarea antes de agregarla.");
    }
});

filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        filtroActual = btn.getAttribute("data-filter");
        aplicarFiltro(filtroActual);
    });
});

function aplicarFiltro(tipo) {
    const tareas = taskList.querySelectorAll("li");

    tareas.forEach(function(tarea) {
        const estaCompletada = tarea.classList.contains("completada");

        switch (tipo) {
            case "todas":
                tarea.style.display = "flex";
                break;
            case "pendientes":
                if (estaCompletada) {
                    tarea.style.display = "none";
                } else {
                    tarea.style.display = "flex";
                }
                break;
            case "completadas":
                if (estaCompletada) {
                    tarea.style.display = "flex";
                } else {
                    tarea.style.display = "none";
                }
                break;
        }
    });
}