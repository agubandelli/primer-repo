document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");

      hamburgerButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        } );
} );

// quiero que cuando se envie el form
// el inoput con name subjet tome el valor del input con name nombre

//captura de elementos
const formulario = document.querySelector("form[name=newsletter]");



formulario.addEventListener("submit", cambioAsunto);

function cambioAsunto(){
    const asunto = document.querySelector("input[name=subject]");
    const nombre = document.querySelector("input[name=nombre]");

    asunto.value="%{submissionId} - Consulta de "+nombre.value+" en el formulario de %{formName}";
}