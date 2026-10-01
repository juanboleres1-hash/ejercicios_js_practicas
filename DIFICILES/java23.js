const botonesAgregar = document.querySelectorAll(".btn-agregar");
const contadorItems = document.getElementById("contadorItems");
const totalPagar = document.getElementById("totalPagar");

let cantidadTotal = 0;
let precioTotal = 0;

botonesAgregar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        
        let precio = Number(boton.getAttribute("data-precio"));

        cantidadTotal++;
        precioTotal += precio;

         contadorItems.textContent = cantidadTotal;
        
         totalPagar.textContent = precioTotal.toFixed(2);
        
    });
});