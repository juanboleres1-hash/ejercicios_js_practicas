const resultados = {
    javascript: 0,
    python: 0,
    java: 0
};

let totalGeneral = 0;

const botonesVotar = document.querySelectorAll(".btn-votar");
const spanTotalVotos = document.getElementById("totalVotos");

botonesVotar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        
        let opcionSeleccionada = boton.getAttribute("data-opcion");

        resultados[opcionSeleccionada]++;
        totalGeneral++;

        const spanOpcion = document.getElementById(`votos-${opcionSeleccionada}`);
        spanOpcion.textContent = `${resultados[opcionSeleccionada]} votos`;

        spanTotalVotos.textContent = totalGeneral;

        boton.style.borderColor = "#28a745";
        setTimeout(() => {
            boton.style.borderColor = "#e9ecef";
        }, 300);
    });
});