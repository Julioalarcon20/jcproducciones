window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('body');
    
    // Agregar la clase 'loading' al body
    content.classList.add('loading');
    
    // Ocultar el loader y mostrar el contenido después de cargar la página
    setTimeout(function() {
      loader.style.opacity = '0'; // Cambiar la opacidad del loader a 0
      content.classList.remove('loading'); // Eliminar la clase 'loading' del body
    }, 2000); // Cambiar el valor de 2000 por el tiempo que desees que dure el loader
    
    // Eliminar la clase 'loading' del body después de 2 segundos
    setTimeout(function() {
      content.classList.remove('loading');
    }, 2000); // Cambiar el valor de 2000 por el tiempo que desees que dure el loader
  });
  