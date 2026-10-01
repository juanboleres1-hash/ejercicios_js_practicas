const form = document.getElementById("registroForm");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("password");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const exitoMensaje = document.getElementById("exitoMensaje");

form.addEventListener("submit"), function(evento) {
 
    evento.preventDefault();

   errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    exitoMensaje.textContent = "";

    let esValido = true;


    let valorNombre = inputNombre.value.trim();
    if (valorNombre === "") {
        errorNombre.textContent = "El nombre no puede estar vacío.";
        esValido = false;
    }

    let valorCorreo = inputCorreo.value.trim();
    if (!valorCorreo.includes("@") || !valorCorreo.includes(".")) {
        errorCorreo.textContent = "El correo debe contener '@' y un punto ('.').";
        esValido = false;
    }


    let valorPassword = inputPassword.value;
    let tieneNumero = /\d/.test(valorPassword);

    if (valorPassword.length < 8 || !tieneNumero) {
        errorPassword.textContent = "Mínimo 8 caracteres y al menos un número.";
        esValido = false;
    }

    if (esValido) {
        exitoMensaje.textContent = "¡Registro exitoso! Bienvenido a la plataforma.";
        form.reset(); 
    }
}