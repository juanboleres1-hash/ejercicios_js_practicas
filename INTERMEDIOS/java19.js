const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#itemList li");

searchInput.addEventListener("input", function() {
    
    let textoBusqueda = searchInput.value.toLowerCase();

    items.forEach(function(item) {
        let textoItem = item.textContent.toLowerCase();

        if (textoItem.includes(textoBusqueda)) {
            item.style.display = ""; 
        } else {
            item.style.display = "none"; 
        }
    });
});