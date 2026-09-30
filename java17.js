const textarea = document.getElementById("textoInput");
const contadorSpan = document.getElementById("contador");

textarea.addEventListener("input", function() {
    
    let cantidadCaracteres = textarea.value.length;
    
    contadorSpan.textContent = cantidadCaracteres;
    
});