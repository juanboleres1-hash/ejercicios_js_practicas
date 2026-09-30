const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        
        tarjeta.classList.toggle("seleccionada");
        
    });
});