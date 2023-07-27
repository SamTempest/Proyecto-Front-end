//Se obtienen los elementos HTML
const username = document.getElementById("username");
const correo = document.getElementById("email");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const button = document.getElementById("button");


//Se anicializa un escuchador de eventos
button.addEventListener(`click`, registroUsuario)


function registroUsuario(e) {
    e.preventDefault();// se evita el comportamiento por defecto de los formularios
    if (username.value == "" || password.value == "" || confirmar.value == "" ||telefono.value == ""||edad.value == ""||correo.value == "") {//se validan los campos
        alert("Todos los datos son obligatorios")
    } else if (confirmar.value !== password.value) {
        alert("Las contraseñas no coinciden")
    }
    else{
        const data = {//Se guardan los datos ingresados en la varible "data"
            username:username.value,
            password: password.value,
            telefono: telefono.value,
            F_nacimiento: edad.value,
            correo: correo.value,
        }
        console.log(data);

        //Se transforma los datos a formato JSON**********************************************
        var json = JSON.stringify(data);
        //  window.location.href = "login.html";
    }
}