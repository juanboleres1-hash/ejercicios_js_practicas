document.addEventListener("DOMContentLoaded", function() {
    let tareas = [];

    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const totalCount = document.getElementById("totalCount");
    const pendingCount = document.getElementById("pendingCount");
    const completedCount = document.getElementById("completedCount");

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const texto = taskInput.value.trim();
        
        if (texto === "") return;

        const nuevaTarea = {
            id: Date.now(),
            texto: texto,
            completada: false
        };

        tareas.push(nuevaTarea);
        taskInput.value = "";
        renderizarApp();
    });

    function renderizarApp() {
        taskList.innerHTML = "";

        if (tareas.length === 0) {
            taskList.innerHTML = `<li style="text-align: center; color: #adb5bd; padding: 15px;">No hay tareas registradas.</li>`;
            totalCount.textContent = "0";
            pendingCount.textContent = "0";
            completedCount.textContent = "0";
            return;
        }

        tareas.forEach(tarea => {
            const li = document.createElement("li");
            li.className = `task-item ${tarea.completada ? "completed" : ""}`;
            
            const divContent = document.createElement("div");
            divContent.className = "task-content";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = tarea.completada;

            const span = document.createElement("span");
            span.textContent = tarea.texto;

            divContent.appendChild(checkbox);
            divContent.appendChild(span);

            divContent.addEventListener("click", function() {
                tarea.completada = !tarea.completada;
                renderizarApp();
            });

            const btnDelete = document.createElement("button");
            btnDelete.className = "btn-delete";
            btnDelete.innerHTML = "🗑️";
            
            btnDelete.addEventListener("click", function(e) {
                e.stopPropagation();
                tareas = tareas.filter(t => t.id !== tarea.id);
                renderizarApp();
            });

            li.appendChild(divContent);
            li.appendChild(btnDelete);
            taskList.appendChild(li);
        });

        totalCount.textContent = tareas.length;
        completedCount.textContent = tareas.filter(t => t.completada).length;
        pendingCount.textContent = tareas.length - tareas.filter(t => t.completada).length;
    }

    renderizarApp();
});