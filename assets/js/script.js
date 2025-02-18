const rutas = document.querySelectorAll('.route');

rutas.forEach(ruta => {
    ruta.addEventListener('click', () => {
        const informacion = ruta.querySelector('.route-text');
        if (informacion.style.display === 'block') {
            informacion.style.display = 'none';
        } else {
            informacion.style.display = 'block';
        }
    });
});