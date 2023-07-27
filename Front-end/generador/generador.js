//Se obtienen los elementos HTML
const añadir = document.getElementById("añadir");
const containerEncuesta = document.getElementById("generador");
const eliminar = document.getElementById("eliminar");
const guardar = document.getElementById("guardar");


//Se generan los array para contener los datos a enviar
let enviar = []
let listaPreguntas = [];





//Se generan variables para en conteno de las preguntas
let numeroRespuesta = [];
let existePregunta = 0;


//Se anicializa un escuchador de eventos para generar los elmentos HTML
añadir.addEventListener(`click`, anadirElemento)




//funcion a ejecutar al hacer click en el boton añadir
function anadirElemento(){
    //Se realiza el conteo de las pregutas
    existePregunta = existePregunta +1;
    numeroRespuesta.push(existePregunta);
    console.log(numeroRespuesta);
    console.log(existePregunta);


    //Se generan los elementos HTML y sus respectivas clases

    let conteinerPregunta = document.createElement("div")//contenedor
    conteinerPregunta.classList.add("preguntadiv");
    conteinerPregunta.setAttribute("id", existePregunta);


    let pregunta = document.createElement("input");//cuadro de texto
    pregunta.setAttribute("type", "text");
    pregunta.setAttribute("placeholder", "Añadir Pregunta");
    pregunta.setAttribute("id", "preg"+existePregunta);
    pregunta.classList.add("pregunta");
    conteinerPregunta.appendChild(pregunta);
    containerEncuesta.appendChild(conteinerPregunta);

    if (existePregunta <= 1) {//se designa el primer dato del array como el titulo de la encuesta
        pregunta.setAttribute("placeholder", "Título de la encuesta");
        conteinerPregunta.classList.add("tituloPregunta");
    }
    if (existePregunta == 2) {//se designa el segundo dato del array como el titulo de la encuesta
        pregunta.setAttribute("placeholder", "Descripción de la encuesta");
        conteinerPregunta.classList.add("descripcionPregunta");
    }
}

//Se anicializa un escuchador de eventos para eliminar los elmentos HTML de forma Global
eliminar.addEventListener(`click`, eliminarElemento);

//funcion a ejecutar al hacer click en el boton Eliminar
function eliminarElemento(){
    if (existePregunta > 0) {//Si existe se elimina el elemento
        let divEliminado = document.getElementById(existePregunta);
        divEliminado.remove();
       

    //Se elimina el valor de los datos a enviar y se ajusta el contador de preguntas
    existePregunta = existePregunta - 1;
    numeroRespuesta.pop();
    console.log(numeroRespuesta);
    console.log(existePregunta);

    }
}





//Se inicializa la escucha de eventos para guardar
guardar.addEventListener(`click`, guardarElemento);

//funcion a ejecutar al hacer click en el boton guardar
function guardarElemento() {
    let confirmar = confirm("¿Seguro que quieres guardar? No podras modificar el documento una vez guardado")
    if (confirmar) {
        let idPregunta = existePregunta
        let fecha = {fecha: new Date()};
        

        //Se utiliza un bucle para que se ejecute por cada uno de las preguntas generadas
        for (let i = 0; i < idPregunta; i++) {
            let guardarDato = document.getElementById("preg"+existePregunta).value;//Se obtiene el valor del input
            
            //Se identifica y guarda el valor del titulo
            if (existePregunta == 1) {
                let prepararEnvio = {nombre: guardarDato}
                enviar.push(prepararEnvio)

                existePregunta = existePregunta-1;//se ajusta el contador
            } 
            //Se identifica y guarda el valor de la descripcion
            else if (existePregunta == 2) {
                let prepararEnvio2 = {descripcion: guardarDato}
                enviar.push(prepararEnvio2)

                existePregunta = existePregunta-1;//se ajusta el contador
                
            } 
            //Se identifica y guarda el valor de cada una de las preguntas 
            else {
                let prepararEnvio3 = {pregunta: guardarDato}
                listaPreguntas.push(prepararEnvio3)//se guardan las preguntas

                existePregunta = existePregunta-1;//se ajusta el contador
            }
            
        }
        //se ordenan los array
        enviar.reverse();
        listaPreguntas.reverse();

        //se incorporan las preguntas en el array principal
        enviar.push(listaPreguntas);

        //Se añade la Fecha de creacion del formulario
        enviar.push(fecha);

        //Se transforma los datos a formato JSON
        var json = JSON.stringify(enviar);
        console.log(json);
        
        //se refresca la paguina
        location.reload();
    }else{

    }
}