const tipoCuenta = document.getElementById("tipoCuenta");
const seccionEmpresarial = document.getElementById("seccionEmpresarial");
const seccionEstudiantil = document.getElementById("seccionEstudiantil");

tipoCuenta.addEventListener("change", function() {
    const valorSeleccionado = tipoCuenta.value;

    seccionEmpresarial.classList.add("oculto");
    seccionEstudiantil.classList.add("oculto");

    if (valorSeleccionado === "empresarial") {
        seccionEmpresarial.classList.remove("oculto");
    } else if (valorSeleccionado === "estudiantil") {
        seccionEstudiantil.classList.remove("oculto");
    }
   
});