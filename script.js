document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-reserva");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita envío automático

    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    let errores = [];

    // Validar nombre
    if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validar fecha
    if (!fecha) {
      errores.push("La fecha es obligatoria.");
    } else {
      const hoy = new Date();
      const fechaSeleccionada = new Date(fecha);
      if (fechaSeleccionada < hoy.setHours(0,0,0,0)) {
        errores.push("La fecha no puede ser en el pasado.");
      }
    }

    // Validar hora
    if (!hora) {
      errores.push("La hora es obligatoria.");
    }

    // Mostrar resultados
    if (errores.length > 0) {
      alert("Errores:\n- " + errores.join("\n- "));
    } else {
      alert("Reserva realizada con éxito.");
      form.reset();
    }
  });
});
