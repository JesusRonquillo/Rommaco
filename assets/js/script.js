'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });

/**
 * go to top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

// Inicializa EmailJS con tu USER_ID
emailjs.init("whP0r98CQVDfo5Hiu");  // Asegúrate de usar tu ID de usuario aquí

// Selecciona el formulario
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtén los datos del formulario
  const formData = new FormData(form);

  // Prepara los datos a enviar
  const templateParams = {
    from_name: formData.get("name"),  // Nombre del campo "name" en el formulario
    from_email: formData.get("email"),  // Nombre del campo "email" en el formulario
    message: formData.get("message")  // Nombre del campo "message" en el formulario
  };

  // Envía el correo usando EmailJS
  emailjs.send("service_zksrug5", "template_7p5l7qe", templateParams)
    .then(function (response) {
      console.log("Éxito al enviar el correo: ", response);
    }, function (error) {
      console.log("Error al enviar el correo: ", error);
    });
});
