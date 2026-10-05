const form = document.getElementById("regForm");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("telefono");
const passInput = document.getElementById("password");

const errorEmail = document.getElementById("errorEmail");
const errorTelefono = document.getElementById("errorTelefono");
const errorPassword = document.getElementById("errorPassword");
const exitoMensaje = document.getElementById("exitoMensaje");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const regexTelefono = /^\d{8,10}$/;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;


form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    errorEmail.textContent = "";
    errorTelefono.textContent = "";
    errorPassword.textContent = "";
    exitoMensaje.textContent = "";

    let formularioValido = true;

    const valorEmail = emailInput.value.trim();
    if (valorEmail === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        formularioValido = false;
    } else if (!regexEmail.test(valorEmail)) {
        errorEmail.textContent = "El formato del correo no es válido (ej. usuario@dominio.com).";
        formularioValido = false;
    }

    const valorTel = telInput.value.trim();
    if (valorTel === "") {
        errorTelefono.textContent = "El número de teléfono es obligatorio.";
        formularioValido = false;
    } else if (!regexTelefono.test(valorTel)) {
        errorTelefono.textContent = "Debe contener únicamente números (entre 8 y 10 dígitos).";
        formularioValido = false;
    }

    const valorPass = passInput.value;
    if (valorPass === "") {
        errorPassword.textContent = "La contraseña es obligatoria.";
        formularioValido = false;
    } else if (!regexPassword.test(valorPass)) {
        errorPassword.textContent = "Debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, un número y un símbolo.";
        formularioValido = false;
    }

    if (formularioValido) {
        exitoMensaje.textContent = "¡Todos los campos cumplen con las expresiones regulares!";
        form.reset();
    }
});