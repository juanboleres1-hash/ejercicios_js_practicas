function inicializarValidador(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const spansError = form.querySelectorAll(".error");
        spansError.forEach(span => span.textContent = "");
        
        const exitoMensaje = document.getElementById("exitoMensaje");
        if (exitoMensaje) exitoMensaje.textContent = "";

        let formularioValido = true;

        const inputsConReglas = form.querySelectorAll("[data-rules]");

        inputsConReglas.forEach(input => {
            const reglasStr = input.getAttribute("data-rules"); 
            const reglas = reglasStr.split("|");
            const valor = input.value.trim();
            const nombreCampo = input.name;
            
            const spanError = form.querySelector(`[data-error-for="${nombreCampo}"]`);

            for (let regla of reglas) {
                if (regla === "required" && valor === "") {
                    if (spanError) spanError.textContent = "Este campo es obligatorio.";
                    formularioValido = false;
                    break;
                }

                if (regla === "email" && (!valor.includes("@") || !valor.includes("."))) {
                    if (spanError) spanError.textContent = "Ingresa un correo electrónico válido.";
                    formularioValido = false;
                    break;
                }

                if (regla.startsWith("min:")) {
                    let minLength = Number(regla.split(":")[1]);
                    if (valor.length < minLength) {
                        if (spanError) spanError.textContent = `Debe tener al menos ${minLength} caracteres.`;
                        formularioValido = false;
                        break;
                    }
                }
            }
        });

        if (formularioValido) {
            if (exitoMensaje) {
                exitoMensaje.textContent = "Validación exitosa, Formulario enviado correctamente.";
            }
            form.reset();
        }
    });
}

inicializarValidador("myForm");