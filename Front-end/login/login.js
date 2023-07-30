// Obtener los valores de los elementos HTML
let Usuario = document.getElementById("email");
let contrasena = document.getElementById("password");
let button = document.getElementById("button");


//Se inicia el escuchador de eventos
button.addEventListener(`click`, iniciarSesion)



// Iniciar sesión
function iniciarSesion(e) {
  e.preventDefault();
  let correoUsuario = Usuario.value;
  let contrasenaUsuario=contrasena.value;



//  Se resiben los datos****************************************

    let recibirDato = '{"nombre":"datoNombre", "correo": "1@1.com", "telefono":"datoTelefono", "edad":"datoEdad","contraseña": "1"}';

    // Convertir el objeto JSON en un array
    let manejarDato = JSON.parse(recibirDato);

    // Mostrar el array resultante
    console.log(manejarDato);

  //************************************************************ */



      // Validar las credenciales del usuario
    if (correoUsuario === manejarDato.correo && contrasenaUsuario === manejarDato.contraseña) {
      // Iniciar sesión
      sessionStorage.setItem("sesion", "iniciada");
      sessionStorage.setItem("user", manejarDato.nombre);
      window.location.href = "../generador/generador.html"
    } else{
      alert("Datos Invalidos");
    }
    
  }
