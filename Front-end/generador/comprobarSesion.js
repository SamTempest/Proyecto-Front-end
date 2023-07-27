  // Comprobar si la sesión está iniciada
  function comprobarSesion() {
    // Obtener el estado de la sesión
    let sesion = sessionStorage.getItem("sesion");
  
    // Comprobar si la sesión está iniciada
    if (sesion === "iniciada") {
      console.log("La sesión está iniciada");
    } else {
      window.location.href = "../Errores/accesoBloqueado.html"
    }
  }
  comprobarSesion();