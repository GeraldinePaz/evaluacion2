// main.js

$(document).ready(function () {
  // Validación del formulario de contacto
  $('#contactoForm').on('submit', function (e) {
    e.preventDefault();

    let nombre = $('#nombre').val().trim();
    let email = $('#email').val().trim();
    let mensaje = $('#mensaje').val().trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Expresión regular básica para validar email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    alert('Mensaje enviado correctamente. ¡Gracias por tu interés!');
    $(this).trigger('reset');
  });

  // Lógica para el test de seguridad
  $('#btnEvaluar').on('click', function () {
    let puntaje = 0;
    if ($('input[name="pregunta1"]:checked').val() === 'b') puntaje++;
    if ($('input[name="pregunta2"]:checked').val() === 'a') puntaje++;
    if ($('input[name="pregunta3"]:checked').val() === 'c') puntaje++;

    $('#resultadoTest').html(`Tu puntaje es ${puntaje}/3`);
  });
});
