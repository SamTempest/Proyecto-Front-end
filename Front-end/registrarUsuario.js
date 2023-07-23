//Se obtienen los elementos HTML
const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
const confirmar = document.getElementById("confirmar");


//Se inicializa un escuchador de eventos
button.addEventListener(`click`, registroUsuario)


function registroUsuario(e) {
        e.preventDefault()// se evita el comportamiento por defecto de los formularios
        if (username.value == "" || password.value == "" || confirmar.value == "") {//se validan los campos
            alert("Todos los datos son obligatorios")
        } else if (confirmar.value !== password.value) {
            alert("Las contraseñas no coinciden")
        }
        else{
            const data = {//Se guardan los datos ingresados en la varible "data"
                username:username.value,
                password: password.value
            }
            window.location.href = "login.html";
        }
}