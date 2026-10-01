const formulario = document.getElementById("miFormulario");
const inputNombre = document.getElementById("nombre");
const errorMensaje = document.getElementById("errorMensaje");

formulario.addEventListener("submit", function(evento) {
    
    let valorNombre = inputNombre.value.trim();

    if (valorNombre === "") {
        
        evento.preventDefault();
        
        errorMensaje.textContent = "Error: El campo de nombre no puede estar vacío.";
        
    } else {
        errorMensaje.textContent = "";
    }
});