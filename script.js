document.addEventListener('DOMContentLoaded', function() {
    // Función para desplazamiento suave al hacer clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Obtén todas las imágenes con la clase "Imagen"
    const imagenes = document.querySelectorAll('.Imagen');
    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', mostrarDescripcion);
    });

    function mostrarDescripcion(event) {
        const contenedor = event.target.parentElement;
        const descripcion = contenedor.querySelector('p');
        descripcion.classList.toggle('mostrar');
    }

    // Obtén el botón de desplazamiento hacia arriba
    const btnArriba = document.querySelector('.btn-arriba');

    // Agregar evento al botón para desplazarse hacia arriba
    btnArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mostrar u ocultar el botón según la posición de desplazamiento
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            // Si el usuario ha desplazado más de 200 píxeles, muestra el botón
            btnArriba.style.display = 'block';
        } else {
            // Si está en la parte superior de la página, oculta el botón
            btnArriba.style.display = 'none';
        }
    });
});
