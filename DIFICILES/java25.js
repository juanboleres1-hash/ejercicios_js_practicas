const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach(function(pregunta) {
    pregunta.addEventListener("click", function() {
        
        let itemActual = pregunta.parentElement;
        
        let estaActivo = itemActual.classList.contains("activo");

        const todosLosItems = document.querySelectorAll(".faq-item");
        todosLosItems.forEach(function(item) {
            item.classList.remove("activo");
        });

        if (!estaActivo) {
            itemActual.classList.add("activo");
        }
        
    });
});