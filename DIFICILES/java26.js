const inputSegundos = document.getElementById("inputSegundos");
const btnIniciar = document.getElementById("btnIniciar");
const spanContador = document.getElementById("contador");
const mensajeFinal = document.getElementById("mensajeFinal");

let intervalo = null; 

btnIniciar.addEventListener("click", function() {
    clearInterval(intervalo);
    mensajeFinal.textContent = "";

    let tiempoRestante = Number(inputSegundos.value);

    if (tiempoRestante <= 0 || isNaN(tiempoRestante)) {
        alert("Por favor, ingresa un número válido de segundos.");
        return;
    }

    spanContador.textContent = tiempoRestante;

    intervalo = setInterval(function() {
        tiempoRestante--; 

       
        spanContador.textContent = tiempoRestante;

        
        if (tiempoRestante <= 0) {
            clearInterval(intervalo); 
            mensajeFinal.textContent = "Tiempo cumplido";
        }
    }, 1000);
});