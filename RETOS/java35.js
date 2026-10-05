const inputPassword = document.getElementById("password");
const btnToggle = document.getElementById("btnToggle");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

btnToggle.addEventListener("click", function() {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        btnToggle.textContent = "🔒"; 
    } else {
        inputPassword.type = "password";
        btnToggle.textContent = "👁️";
    }
});

inputPassword.addEventListener("input", function() {
    const valor = inputPassword.value;
    let fortaleza = 0;

    if (valor.length === 0) {
        strengthBar.style.width = "0%";
        strengthBar.style.backgroundColor = "transparent";
        strengthText.textContent = "Introduce una contraseña";
        strengthText.style.color = "#6c757d";
        return;
    }

    if (valor.length >= 8) fortaleza++;
    if (/[A-Z]/.test(valor) && /[a-z]/.test(valor)) fortaleza++;
    if (/\d/.test(valor)) fortaleza++;
    if (/[^A-Za-z0-9]/.test(valor)) fortaleza++; 

    if (fortaleza <= 1) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "#dc3545"; 
        strengthText.textContent = "Débil";
        strengthText.style.color = "#dc3545";
    } else if (fortaleza === 2 || fortaleza === 3) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "#ffc107"; 
        strengthText.textContent = "Media";
        strengthText.style.color = "#e0a800";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "#28a745"; 
        strengthText.textContent = "Fuerte";
        strengthText.style.color = "#28a745";
    }
});