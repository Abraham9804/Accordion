document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos del título del acordeón
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    accordionTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Seleccionamos el contenedor de texto correspondiente
            const textContainer = this.nextElementSibling;
            
            // Seleccionamos los íconos plus y minus
            const buttonPlus = this.querySelector('.button-plus');
            const buttonMinus = this.querySelector('.button-minus');
            
            // Alternamos las clases activo/inactivo usando classList.toggle
            
            textContainer.classList.toggle('inactivo');
            buttonPlus.classList.toggle('inactivo');
            buttonMinus.classList.toggle('inactivo');
        });
    });
});
