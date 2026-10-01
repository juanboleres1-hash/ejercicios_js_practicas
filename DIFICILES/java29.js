const contactForm = document.getElementById("contactForm");
const resumenContainer = document.getElementById("resumenContainer");
const btnVolver = document.getElementById("btnVolver");

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputAsunto = document.getElementById("asunto");
const inputMensaje = document.getElementById("mensaje");

const resNombre = document.getElementById("resNombre");
const resCorreo = document.getElementById("resCorreo");
const resAsunto = document.getElementById("resAsunto");
const resMensaje = document.getElementById("resMensaje");

contactForm.addEventListener("submit", function(evento) {
    evento.preventDefault();

    resNombre.textContent = inputNombre.value;
    resCorreo.textContent = inputCorreo.value;
    resAsunto.textContent = inputAsunto.value;
    resMensaje.textContent = inputMensaje.value;

    contactForm.style.display = "none";
    resumenContainer.style.display = "block";
});

btnVolver.addEventListener("click", function() {
    contactForm.reset(); 
    resumenContainer.style.display = "none"; 
    contactForm.style.display = "block"; 
});