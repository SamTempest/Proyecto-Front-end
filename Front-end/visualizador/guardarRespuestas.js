//Se obtoenen los elementos HTML
let botonEnviar = document.getElementById("enviarResp");


//Se inicializa la escucha de eventos para guardar
botonEnviar.addEventListener(`click`, guardarElemento);


//Se obtiene el id del ultimo elemento para enumerar las preguntas
const elementos = document.getElementsByClassName('inputResp');
const ultimoElemento = elementos[elementos.length - 1];
let idUltimo = ultimoElemento.id;

console.log(idUltimo);

let listaRespuestas = []



function guardarElemento() {
    let confirmar = confirm("¿Seguro que quieres guardar? No podras modificar el documento una vez guardado")
    if (confirmar) {
        let contador = Number(idUltimo); ;
        
        //Se utiliza un bucle para que se ejecute por cada uno de las preguntas generadas
        for (let i = 0; i <= contador; i++) {
            let guardarResp = document.getElementById(i).value;//Se obtiene el valor del input
          console.log(guardarResp);
                let prepararEnvio = {pregunta: guardarResp}
                listaRespuestas.push(prepararEnvio)//se guardan las preguntas

        }

        //Se transforma los datos a formato JSON
        var jsonResp = JSON.stringify(listaRespuestas);
        console.log(jsonResp);
        
        //se refresca la paguina
         location.reload();
    }else{

    }}