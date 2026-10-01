const form = document.getElementById("completeForm");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const selectPlan = document.getElementById("plan");
const checkTerminos = document.getElementById("terminos");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPlan = document.getElementById("errorPlan");
const errorTerminos = document.getElementById("errorTerminos");
const mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorPlan.textContent = "";
    errorTerminos.textContent = "";

    let esValido = true;

    if (inputNombre.value.trim() === "") {
        errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
        esValido = false;
    }

    let valorCorreo = inputCorreo.value.trim();
    if (!valorCorreo.includes("@") || !valorCorreo.includes(".")) {
        errorCorreo.textContent = "El correo debe incluir '@' y un punto ('.').";
        esValido = false;
    }

   if (selectPlan.value === "") {
        errorPlan.textContent = "Debes seleccionar un plan de suscripción.";
        esValido = false;
    }

    if (!checkTerminos.checked) {
        errorTerminos.textContent = "Debes aceptar los términos y condiciones para continuar.";
        esValido = false;
    }

    if (esValido) {
        form.style.display = "none";
        mensajeExito.classList.remove("oculto");
    }
});