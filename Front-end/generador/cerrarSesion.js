const CerrarButton = document.getElementById("CerrarButton");


CerrarButton.addEventListener("click", cerrarSesion);


 
  // Cerrar sesión
  function cerrarSesion() {
    // Eliminar la sesión
    sessionStorage.removeItem("sesion");
    window.location = "../index.html"
  }
  