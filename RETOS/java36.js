const productos = [
    { nombre: "Laptop Pro 15\"", categoria: "Tecnología", precio: 1200 },
    { nombre: "Mouse Inalámbrico", categoria: "Accesorios", precio: 25 },
    { nombre: "Teclado Mecánico RGB", categoria: "Accesorios", precio: 80 },
    { nombre: "Monitor UltraWide 34\"", categoria: "Tecnología", precio: 450 },
    { nombre: "Silla Ergonómica", categoria: "Oficina", precio: 220 },
    { nombre: "Auriculares Bluetooth", categoria: "Audio", precio: 95 }
];

const tablaCuerpo = document.getElementById("tablaCuerpo");
const buscador = document.getElementById("buscador");
const btnOrdenarNombre = document.getElementById("btnOrdenarNombre");
const btnOrdenarPrecio = document.getElementById("btnOrdenarPrecio");

let ordenAscendenteNombre = true;
let ordenAscendentePrecio = true;

function renderizarTabla(datos) {
    tablaCuerpo.innerHTML = ""; 
    if (datos.length === 0) {
        tablaCuerpo.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #777;">No se encontraron resultados</td></tr>`;
        return;
    }

    datos.forEach(prod => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${prod.nombre}</td>
            <td>${prod.categoria}</td>
            <td>$${prod.precio.toLocaleString()}</td>
        `;
        tablaCuerpo.appendChild(fila);
    });
}

buscador.addEventListener("input", function() {
    const textoBusqueda = buscador.value.toLowerCase().trim();

    const productosFiltrados = productos.filter(prod => 
        prod.nombre.toLowerCase().includes(textoBusqueda) || 
        prod.categoria.toLowerCase().includes(textoBusqueda)
    );

    renderizarTabla(productosFiltrados);
});

btnOrdenarNombre.addEventListener("click", function() {
    productos.sort((a, b) => {
        if (a.nombre < b.nombre) return ordenAscendenteNombre ? -1 : 1;
        if (a.nombre > b.nombre) return ordenAscendenteNombre ? 1 : -1;
        return 0;
    });

    ordenAscendenteNombre = !ordenAscendenteNombre;    renderizarTabla(productos);
});

btnOrdenarPrecio.addEventListener("click", function() {
    productos.sort((a, b) => {
        return ordenAscendentePrecio ? a.precio - b.precio : b.precio - a.precio;
    });

    ordenAscendentePrecio = !ordenAscendentePrecio; 
    renderizarTabla(productos);
});

renderizarTabla(productos);