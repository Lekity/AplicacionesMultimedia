// Cambiar el color del encabezado al hacer clic
document.querySelector('header').addEventListener('click', function() {
    this.style.backgroundColor = '#0066cc'; // Cambia el color de fondo
});

// Mostrar una alerta al hacer clic en el título principal
document.querySelector('h1').addEventListener('click', function() {
    alert('¡Bienvenido a la UNAD!'); // Muestra un mensaje de alerta
});

// Cambiar el color de los subtítulos al pasar el mouse
const subtitulos = document.querySelectorAll('h3, h4, h5');
subtitulos.forEach(subtitulo => {
    subtitulo.addEventListener('mouseover', function() {
        this.style.color = '#00447c'; // Cambia el color al pasar el mouse
    });
    subtitulo.addEventListener('mouseout', function() {
        this.style.color = '#0066cc'; // Restaura el color al quitar el mouse
    });
});

// Agregar un borde al video al hacer clic
document.querySelector('video').addEventListener('click', function() {
    this.style.border = '4px solid #00447c'; // Añade un borde
});