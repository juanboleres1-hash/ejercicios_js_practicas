const perfiles = [
    {
        nombre: "Sofía Martínez",
        cargo: "Desarrolladora Frontend",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
        nombre: "Carlos Gómez",
        cargo: "Ingeniero Backend",
        foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    {
        nombre: "Lucía Fernández",
        cargo: "Diseñadora UI/UX",
        foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
        nombre: "Mateo Rodríguez",
        cargo: "Especialista en DevOps",
        foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
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