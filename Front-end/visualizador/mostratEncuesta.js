
//Se ontienen los elementos HTML
const listaEncuestas = document.getElementById("listaEncuestas");

//Se inicia el escuchador de eventos para seleccionar una encuesta
listaEncuestas.addEventListener("click", function(event) {
    let elementoClickeado = event.target.id;//se obtiene el id del elemento seleccionado

    //El elemento seleccionado se combierte a JSON y se envia a la base de datos **************************************
    let enviarElemento = JSON.stringify(elementoClickeado)
    //************************************************************************ */

    console.log(enviarElemento);

});



async function enviarBackend(){ // Con esta function vamos a pedirle al backend con el método GET, el cual responde con una .json devuelta 
    try {
        const repuesta = await (await fetch('http://localhost:3000/constructor')).json() //usamos método Get usando fetch y luego el .json lo que hace es transformar la repuesta de json a array para poder trabajarlo 
        return repuesta     // devolvemos la repuesta en el formato array 
        console.log(repuesta);
    } catch (error) {
        console.error(error);
    }
}

async function ordenarFunciones() { // esta función lo que hace es hacer que espere que se complete la respuesta de la API para poder trabajar con la repuesta 
    const resultado = await enviarBackend() // esperamos a que responda la API
    const preguntas = resultado.formulario  // filtramos solo los formularios (debido a que responde también con información del estado, ejemplo si se ejecuto todo correcto responde con un mensaje)
    console.log(preguntas); // borrar cuando se vaya a entregar
    let adaptarPreguntas = preguntas[0]; // esta parte ta era lo que había antes
    let preguntasExtraidas = adaptarPreguntas["pregunta"]  
    obtener(preguntas,preguntasExtraidas)
}



function obtener(preguntas,preguntasExtraidas) {
    preguntas.forEach(encuesta => {//se usa la funcion forEach para recorrer y extrer los datos del array

        let seccion = document.getElementById("encuestas");//Se obtienen los elemtos HTML

    
        let tituloActivo = document.createElement("h2");//se crea un h2 y se añade titulo de la encuesta
        tituloActivo.setAttribute("id", "tituloEncuesta");
        tituloActivo.classList.add("tituloActivo");
        tituloActivo.textContent=encuesta.titulo;
        seccion.appendChild(tituloActivo);

        
        let descripcion = document.createElement("h3");//se crea un h3 y se añade la Descripcion
        descripcion.setAttribute("id", "descripción");
        descripcion.classList.add("descActivo");
        descripcion.textContent = encuesta.descripcion;
        seccion.appendChild(descripcion);


        let user = document.createElement("span");//Se crea un span y se añade el nombre del creador
        user.setAttribute("id", "userName");
        user.classList.add("UserActivo");
        user.textContent = "Encuesta creada por: " +encuesta.datoUser;
        seccion.appendChild(user);

        for (let i = 0; i < preguntasExtraidas.length; i++) {//Se usa un siclo para hacer los elementos de cada pregunta

        let mostrarPregunta= preguntasExtraidas[i]

            let div = document.createElement("div");//Se crea un div para contener las preguntas
            div.setAttribute("id", "divPreg");
            div.classList.add("divActivo");
            seccion.appendChild(div)

            let preg = document.createElement("h4");//Se crea un h4 con la pregunta
            preg.setAttribute("id", "divPreg");
            preg.classList.add("h4Activo");
            preg.textContent = mostrarPregunta["pregunta"]
            div.appendChild(preg)

            let resp = document.createElement("input");//Se crea un input text para recibir la pregunta
            resp.setAttribute("tipe", "text");
            resp.setAttribute("placeholder", "Ingresa tu respuesta");
            resp.setAttribute("id", i);
            resp.classList.add("inputResp");
            div.appendChild(resp)
        }
        
      });
}

ordenarFunciones()