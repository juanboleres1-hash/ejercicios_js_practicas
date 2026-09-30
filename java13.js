const boton = document.getElementById("btnT");
const parrafo = document.getElementById("Parrafo");

boton.addEventListener("click", function() {
    
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block"; 
    } else {
        parrafo.style.display = "none";  
    }
    
});