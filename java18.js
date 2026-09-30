const loginForm = document.getElementById("loginForm");
const usuarioInput = document.getElementById("usuario");
const passwordInput = document.getElementById("password");
const mensajeAlerta = document.getElementById("mensajeAlerta");

loginForm.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let usuario = usuarioInput.value.trim();
    let password = passwordInput.value.trim();

    if (usuario === "" || password === "") {
        mensajeAlerta.style.color = "red";
        mensajeAlerta.textContent = "Error: Todos los campos son obligatorios.";
        return; 
    }

    if (password.length < 6) {
        mensajeAlerta.style.color = "red";
        mensajeAlerta.textContent = "Error: La contraseña debe tener al menos 6 caracteres.";
        return; 
    }

    mensajeAlerta.style.color = "green";
    mensajeAlerta.textContent = `¡Inicio de sesión exitoso! Bienvenido, ${usuario}.`;
});