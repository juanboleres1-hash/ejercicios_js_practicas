const imagen = document.getElementById("Imagen");
const btnCambiar = document.getElementById("btnCambiar");

const rutaImagen1 = "cdag.jpg";
const rutaImagen2 = "cdag2.jpg";

let esPrimeraImagen = true;

btnCambiar.addEventListener("click", function() {
    
    if (esPrimeraImagen) {
        imagen.src = rutaImagen2;
        imagen.alt = "Imagen de Afuera";
        esPrimeraImagen = false; 
    } else {
        imagen.src = rutaImagen1;
        imagen.alt = "Imagen de Adentro";
        esPrimeraImagen = true; 
    }
    
});