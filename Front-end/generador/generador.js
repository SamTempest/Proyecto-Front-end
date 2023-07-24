//Se obtienen los elementos HTML
const añadir = document.getElementById("añadir");
const containerEncuesta = document.getElementById("generador");
const eliminar = document.getElementById("eliminar");
const guardar = document.getElementById("guardar");
let enviar = []

//Se generan variables para en conteno de las preguntas
let numeroRespuesta = [];
let existePregunta = 0;


//Se inicializa un escuchador de eventos para generar los elementos HTML
añadir.addEventListener(`click`, anadirElemento)


//función a ejecutar al hacer click en el boton añadir
function anadirElemento(){
    //Se realiza el conteo de las pregutas
    existePregunta = existePregunta +1;
    numeroRespuesta.push(existePregunta);
    console.log(numeroRespuesta);
    console.log(existePregunta);

    //Se generan los elementos HTML y sus respectivas clases
    let conteinerPregunta = document.createElement("div")//contenedor
    conteinerPregunta.classList.add("conteinerPregunta");
    conteinerPregunta.setAttribute("id", existePregunta);

    let pregunta = document.createElement("input");//cuadro de texto
    pregunta.setAttribute("type", "text");
    pregunta.setAttribute("placeholder", "Añadir Pregunta");
    pregunta.setAttribute("id", "preg"+existePregunta);
    pregunta.classList.add("pregunta");
    conteinerPregunta.appendChild(pregunta);
    containerEncuesta.appendChild(conteinerPregunta);

    if (existePregunta <= 1) {
        pregunta.setAttribute("placeholder", "Titulo de la encuesta");//se designa el primer dato del array como el titulo de la encuesta
    }
}

//Se anicializa un escuchador de eventos para eliminar los elmentos HTML
eliminar.addEventListener(`click`, eliminarElemento);

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


function guardarElemento() {//Se utiliza un bucle para que se ejecute por cada uno de las preguntas generadas
    let idPregunta = existePregunta
    for (let i = 0; i < idPregunta; i++) {
        
        let guardarDato = document.getElementById("preg"+existePregunta).value;//Se obtiene el valor del input
        existePregunta = existePregunta-1;//se ajusta el contador
        enviar.push(guardarDato);//se guardan los datos
        console.log(enviar);
        
    }    
    enviar.reverse();//se ordenan en el array
        console.log(enviar);
         location.reload();//se refresca la paguina
}

