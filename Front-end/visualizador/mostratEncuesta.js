
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






 
//Se obtiene los datos de la consulta a la base de datos ***************************************
const consultaPregunta = JSON.stringify( [// se finge recibir los datos en formato JSON
    // {
    //     "titulo":"Encuesta 1",
    //     "descripcion":"descripcion-1",
    //     "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
    //     "fecha":"2023-07-27T19:57:19.597Z",
    //     "datoUser":"PedroJH_1234",
    // },
    {
        "titulo":"Encuesta aaaaaaaaaaaaaaaaaaa2",
        "descripcion":"descripcisssssssssssssssssssssssssssssssssssssssssssssson-2",
        "pregunta":[{"pregunta":"Paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    aaaaaaaaaaaaaaaaaaaaaaaaaarecio?"},{"pregunta":"Factible,jano?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
        "fecha":"2023-07-27T19:57:19.597Z",
        "datoUser":"Pedro2",
    },
    // {
    //     "titulo":"Encuesta 3",
    //     "descripcion":"descripcion-3",
    //     "pregunta":[{"pregunta":"Precio?"},{"pregunta":"quizas,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"},{"pregunta":"Factible,si?"},{"pregunta":"Factible,si?"},{"pregunta":"Factible,si?"}],
    //     "fecha":"2023-07-27T19:57:19.597Z",
    //     "datoUser":"Pedro3",
    // },
    // {
    //     "titulo":"Encuesta 4",
    //     "descripcion":"descripcion-4",
    //     "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
    //     "fecha":"2023-07-27T19:57:19.597Z",
    //     "datoUser":"Pedro4",
    // },
  ])

//***********************************************


//Se combierte el JSON en Array
let preguntas = JSON.parse(consultaPregunta);
let adaptarPreguntas = preguntas[0];
let preguntasExtraidas = adaptarPreguntas["pregunta"]







obtener(preguntas)

function obtener(preguntas) {
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

