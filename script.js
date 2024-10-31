const nombreInicial = "Juan";
const apellidoInicial = "Perez";
const diasInicial = 365;

document.addEventListener("DOMContentLoaded", () => {
  const nombreSpan = document.getElementById("nombre");
  const apellidoSpan = document.getElementById("apellido");
  const cantidadDiasSpan = document.getElementById("cantidad-dias");
  const ingresarDatosBtn = document.getElementById("ingresar-datos");

  const formulario = document.getElementById("formulario-datos");
  const enviarDatosBtn = document.getElementById("enviar-datos");

  nombreSpan.textContent = nombreInicial;
  apellidoSpan.textContent = apellidoInicial;
  cantidadDiasSpan.textContent = diasInicial;

  ingresarDatosBtn.addEventListener("click", () => {
    formulario.style.display = "block";
    ingresarDatosBtn.style.display = "none";
  });

  enviarDatosBtn.addEventListener("click", () => {
    const nombreForm = document.getElementById("nombre-form").value;
    const apellidoForm = document.getElementById("apellido-form").value;
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;

    if (nombreForm && apellidoForm && fechaNacimiento) {
      const fechaNacimientoDate = new Date(fechaNacimiento);
      const fechaHoy = new Date();
      const diferenciaTiempo = fechaHoy - fechaNacimientoDate;
      const diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

      nombreSpan.textContent = nombreForm;
      apellidoSpan.textContent = apellidoForm;
      cantidadDiasSpan.textContent = diasVividos;

      formulario.style.display = "none";
      ingresarDatosBtn.style.display = "block";
    } else {
      alert("Por favor, complete todos los campos.");
    }
  });
});
