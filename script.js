// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-reserva");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que se recargue la página
    alert("¡Tu cita ha sido reservada con éxito!");
  });
});
