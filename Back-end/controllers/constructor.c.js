const constructorModels = require("../models/constructor.m")
const fechaActual = new Date();

class constructor{

    async guardar(req, res, next){

        console.log(req.body.pregunta);

        const {titulo,pregunta, descripcion,propietario_usuarioUnico} = req.body

        let usuario_creador = propietario_usuarioUnico
        let fecha_modificacion =  fechaActual.toISOString()
        let fecha_creacion = fechaActual.toISOString()
        let arrayPregunta = pregunta
        
        try {
            const parametros = { usuario_creador, titulo, descripcion, fecha_modificacion, fecha_creacion }
            const resultadoFormulario = await constructorModels.guardarFormulario(parametros)            
            const formulario = resultadoFormulario.insertId

            for (let i = 0; i < arrayPregunta.length; i++) {
                try {
                    let pregunta = arrayPregunta[i].n_pregunta
                let parametrosDePregunta = {pregunta,formulario}
                
                const resultadoPreguntas = await constructorModels.guardarPreguntas(parametrosDePregunta)
                } catch (error) {
                    console.error("error interno");
                    throw error
                }
            }

            res.status("200").json({"Info":{"Resultado":"Se agregó correctamente"}})
        } catch (error) {
            console.error("error externo");
            if (error.sqlMessage) {
                console.error(error.sqlMessage);
            } else {
                console.error(error);
            }
            res.status("404").json({"Info":{"Error":error}})
        }
        next()
    }

    async leerTodos(req, res, next){
        
        let formulario = []
        let pregunta = []
        let guardado = false

        // Vamos a buscar todos los de las base de datos 
        try {
            //consultamos los formularios
            const resultado = await constructorModels.leerTodosFormularios()
            for (let i = 0; i < resultado.length; i++) {
                let formulariosId = resultado[i].id;
                let formularios = resultado[i];

                // consultamos las preguntas de cada formulario
                const preguntas = await constructorModels.leerTodosPreguntas(formulariosId)

                preguntas.forEach(pregun => {
                    pregunta.push({n_pregunta:pregun.pregunta, id: pregun.id })
                });

                //creamos el objeto con la información del formulario y lo agregamos en el array del formulario
                formulario.push({
                    id : formularios.id,
                    titulo : formularios.titulo,
                    descripcion : formularios.descripcion,
                    fecha_modificacion: formularios.fecha_modificacion,
                    fecha_creacion : formularios.fecha_creacion,
                    pregunta:pregunta
                })

            }
            // enviamos el formulario
            res.json({ 
                        "formulario":formulario,
                        "Info":{"Resultado":"consulta exitosa"}
                    }).status("200");
            // Fin
        } catch (error) {
            // creamos un manejo de error

            res.status('404').json({"Info":{"Error":error}})
        }
        


    }
}

module.exports = new constructor();