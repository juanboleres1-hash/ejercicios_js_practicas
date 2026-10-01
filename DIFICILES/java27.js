const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

const btnNext1 = document.getElementById("btnNext1");
const btnPrev2 = document.getElementById("btnPrev2");
const btnNext2 = document.getElementById("btnNext2");
const btnPrev3 = document.getElementById("btnPrev3");
const form = document.getElementById("multiStepForm");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorCiudad = document.getElementById("errorCiudad");
const errorPais = document.getElementById("errorPais");
const mensajeFinal = document.getElementById("mensajeFinal");

btnNext1.addEventListener("click", function() {
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    let esValido = true;

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        esValido = false;
    }
    if (!correo.value.includes("@") || !correo.value.includes(".")) {
        errorCorreo.textContent = "Ingrese un correo válido.";
        esValido = false;
    }

    if (esValido) {
        step1.classList.remove("active");
        step2.classList.add("active");
    }
});

btnPrev2.addEventListener("click", function() {
    step2.classList.remove("active");
    step1.classList.add("active");
});

btnNext2.addEventListener("click", function() {
    errorCiudad.textContent = "";
    errorPais.textContent = "";
    let esValido = true;

    if (ciudad.value.trim() === "") {
        errorCiudad.textContent = "La ciudad es obligatoria.";
        esValido = false;
    }
    if (pais.value.trim() === "") {
        errorPais.textContent = "El país es obligatorio.";
        esValido = false;
    }

    if (esValido) {
        step2.classList.remove("active");
        step3.classList.add("active");
    }
});

btnPrev3.addEventListener("click", function() {
    step3.classList.remove("active");
    step2.classList.add("active");
});

form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    step3.style.display = "none";
    mensajeFinal.textContent = "¡Registro completado con éxito!";
});