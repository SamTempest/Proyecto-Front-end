//Se obtienen los elemtos HTML
let lista = document.getElementById("listaEncuestas");


//Se obtiene los datos de la consulta a la base de datos ***********************
const consulta = JSON.stringify( [// se finge recibir los datos en formato JSON
    {
        "titulo":"aaaaaaaaaaaaaaaaaaaaaa 1",
        "descripcion":"descripcion-1",
        "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
        "fecha":"2023-07-27T19:57:19.597Z",
        "datoUser":"PedroJH_1234",
    },
    {
        "titulo":"sssss 2",
        "descripcion":"descssssssssssssssssssssssssssssssssssasassssssssssssssssssssssssssssssssssssssssssssripcion-2",
        "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
        "fecha":"2023-07-27T19:57:19.597Z",
        "datoUser":"Pedro2",
    },
    {
        "titulo":"bbbbb 3",
        "descripcion":"descripcion-3",
        "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
        "fecha":"2023-07-27T19:57:19.597Z",
        "datoUser":"Pedro3",
    },
    {
        "titulo":"hhhhh 4",
        "descripcion":"descripcion-4",
        "pregunta":[{"pregunta":"Precio?"},{"pregunta":"Factible,no?"},{"pregunta":"Factible"} ,{"pregunta":"Factible,si?"}],
        "fecha":"2023-07-27T19:57:19.597Z",
        "datoUser":"Pedro4",
    },
  ])

//***********************************************

//Se combierte el JSON en Array
let datos = JSON.parse(consulta);
 

obtener(datos)//se llama a la funcion para visualizar los datos


 function obtener(datos) {
    let existePregunta = 1;//se genera un contador
    datos.forEach(encuesta => {//se usa la funcion forEach para recorrer y extrer los datos del array

        let conteinerPregunta = document.createElement("div")//se crea un contenedor html
        conteinerPregunta.classList.add("preguntadiv");
        conteinerPregunta.setAttribute("id","div"+ existePregunta);
    
    
        let pregunta = document.createElement("h3");//se crea un h3 y se añade titulo de la encuesta
        pregunta.setAttribute("id", "preg"+existePregunta);
        pregunta.classList.add("tituloPreg");
        pregunta.textContent=encuesta.titulo;
        conteinerPregunta.appendChild(pregunta);
        

        let descripcion = document.createElement("p");//se crea un "p" y se añade la Descripcion
        descripcion.setAttribute("id", "desc"+existePregunta);
        descripcion.classList.add("descPreg");
        descripcion.textContent = encuesta.descripcion;
        conteinerPregunta.appendChild(descripcion);

        let user = document.createElement("span");//Se crea un span y se añade el nombre del creador
        user.setAttribute("id", "user"+existePregunta);
        user.classList.add("UserEncuesta");
        user.textContent = "Encuesta creada por: " +encuesta.datoUser;
        conteinerPregunta.appendChild(user);

        lista.appendChild(conteinerPregunta);

        existePregunta++;
        
      });
    
 }
