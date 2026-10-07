const perfiles = [
    {
        nombre: "Juan David Boleres",
        cargo: "Desarrollador Frontend",
        foto: "JDB.jpeg"
    },
    {
        nombre: "Alvaro Perez",
        cargo: "Ingeniero Backend",
        foto: "AP.jpeg"
    },
    {
        nombre: "Jose David Rodriguez",
        cargo: "Diseñador UI/UX",
        foto: "JDR.jpeg"
    },
    {
        nombre: "Mia Moreira",
        cargo: "Especialista en DevOps",
        foto: "MM.jpeg"
    }
];

const contenedorTarjetas = document.getElementById("contenedorTarjetas");

perfiles.forEach(function(persona) {
    
    let tarjetaHTML = `
        <div class="card">
            <img src="${persona.foto}" alt="Foto de ${persona.nombre}">
            <h3>${persona.nombre}</h3>
            <p>${persona.cargo}</p>
        </div>
    `;

    contenedorTarjetas.innerHTML += tarjetaHTML;
});