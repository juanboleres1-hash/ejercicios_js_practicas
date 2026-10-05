let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const gameForm = document.getElementById("gameForm");
const guessInput = document.getElementById("guessInput");
const mensajePista = document.getElementById("mensajePista");
const contadorIntentos = document.getElementById("contadorIntentos");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnAdivinar = document.getElementById("btnAdivinar");

gameForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const numeroUsuario = Number(guessInput.value);
    intentos++;
    contadorIntentos.textContent = intentos;

    if (numeroUsuario === numeroAleatorio) {
        mensajePista.textContent = `🎉 ¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`;
        mensajePista.style.color = "#28a745";
        finalizarJuego();
    } else if (numeroUsuario < numeroAleatorio) {
        mensajePista.textContent = "📈 El número secreto es MAYOR. ¡Sigue intentando!";
        mensajePista.style.color = "#d9534f";
    } else {
        mensajePista.textContent = "📉 El número secreto es MENOR. ¡Sigue intentando!";
        mensajePista.style.color = "#d9534f";
    }

    guessInput.value = "";
    guessInput.focus();
});

function finalizarJuego() {
    guessInput.disabled = true;
    btnAdivinar.disabled = true;
    btnAdivinar.style.backgroundColor = "#ccc";
    btnReiniciar.classList.remove("oculto");
}

btnReiniciar.addEventListener("click", function() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    contadorIntentos.textContent = "0";
    mensajePista.textContent = "";
    
    guessInput.disabled = false;
    guessInput.value = "";
    btnAdivinar.disabled = false;
    btnAdivinar.style.backgroundColor = "#007bff";
    btnReiniciar.classList.add("oculto");
    guessInput.focus();
});