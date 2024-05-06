function loadContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpia el contenido existente

    // Simula la carga de contenido desde otro archivo
    fetch(section + '.html')
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            content.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtelo de nuevo más tarde.</p>';
        });
}
