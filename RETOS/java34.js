const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

let numeroActual = "0";
let numeroPrevio = "";
let operacion = null;
let reiniciarPantalla = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.getAttribute("data-valor");

        if (!isNaN(valor) || valor === ".") {
            if (numeroActual === "0" || reiniciarPantalla) {
                numeroActual = valor;
                reiniciarPantalla = false;
            } else {
                if (valor === "." && numeroActual.includes(".")) return;
                numeroActual += valor;
            }
            pantalla.textContent = numeroActual;
        }

        if (valor === "C") {
            numeroActual = "0";
            numeroPrevio = "";
            operacion = null;
            pantalla.textContent = numeroActual;
        }

        if (["+", "-", "*", "/"].includes(valor)) {
            if (operacion !== null) calcular();
            numeroPrevio = numeroActual;
            operacion = valor;
            reiniciarPantalla = true;
        }

        if (valor === "=") {
            if (operacion === null) return;
            calcular();
            operacion = null;
            reiniciarPantalla = true;
        }
    });
});

function calcular() {
    let resultado;
    const prev = parseFloat(numeroPrevio);
    const actual = parseFloat(numeroActual);

    if (isNaN(prev) || isNaN(actual)) return;

    switch (operacion) {
        case "+":
            resultado = prev + actual;
            break;
        case "-":
            resultado = prev - actual;
            break;
        case "*":
            resultado = prev * actual;
            break;
        case "/":
            if (actual === 0) {
                alert("No se puede dividir entre cero.");
                resultado = 0;
            } else {
                resultado = prev / actual;
            }
            break;
        default:
            return;
    }

    numeroActual = resultado.toString();
    pantalla.textContent = numeroActual;
    numeroPrevio = numeroActual;
}