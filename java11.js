let contador = 0;


const spanNumero = document.getElementById("numero");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");


btnSumar.addEventListener("click", function() {
    contador++;
    spanNumero.textContent = contador; 
});



btnRestar.addEventListener("click", function() {
    contador--; 
    spanNumero.textContent = contador; 
});