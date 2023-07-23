//Se obtienen los elementos HTML
const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
const confirmar = document.getElementById("confirmar");


//Se anicializa un escuchador de eventos
button.addEventListener(`click`, ingresoUsuario)


function ingresoUsuario(e) {
        e.preventDefault()// se evita el comportamiento por defecto de los formularios
        if (username.value == "" || password.value == "") {
            alert("Todos los datos son obligatorios")
        }else{
            const data = {//Se guardan los datos ingresados en la varible "data"
                username:username.value,
                password: password.value
            }
            console.log(data);
        }
}