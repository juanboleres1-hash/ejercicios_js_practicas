const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");
function validarNombre(texto) {
    return texto.trim().length >= 3;
}

function validarCorreo(texto) {
    return texto.includes("@") && texto.includes(".");
}

function validarPassword(texto) {
    let tieneNumero = /\d/.test(texto);
    return texto.length >= 8 && tieneNumero;
}
function actualizarEstadoInput(input, esValido) {
    if (input.value.trim() === "") {
        input.classList.remove("valido", "invalido");
    } else if (esValido) {
        input.classList.remove("invalido");
        input.classList.add("valido");
    } else {
        input.classList.remove("valido");
        input.classList.add("invalido");
    }
}

function evaluarFormularioGeneral() {
    let nombreOk = validarNombre(inputNombre.value);
    let correoOk = validarCorreo(inputCorreo.value);
    let passOk = validarPassword(inputPassword.value);

    if (nombreOk && correoOk && passOk) {
        btnSubmit.removeAttribute("disabled");
    } else {
        btnSubmit.setAttribute("disabled", "true");
    }
}
inputNombre.addEventListener("input", function() {
    let esValido = validarNombre(inputNombre.value);
    actualizarEstadoInput(inputNombre, esValido);
    evaluarFormularioGeneral();
});

inputCorreo.addEventListener("input", function() {
    let esValido = validarCorreo(inputCorreo.value);
    actualizarEstadoInput(inputCorreo, esValido);
    evaluarFormularioGeneral();
});

inputPassword.addEventListener("input", function() {
    let esValido = validarPassword(inputPassword.value);
    actualizarEstadoInput(inputPassword, esValido);
    evaluarFormularioGeneral();
});