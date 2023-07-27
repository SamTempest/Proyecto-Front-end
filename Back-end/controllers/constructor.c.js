const { log } = require("console");
const constructorModels = require("../models/constructor.m")
const fechaActual = new Date();

class constructor{
    async guardar(req, res, next){
        console.log(req.body);
        const {titulo,pregunta, descripcion,propietario_usuarioUnico} = req.body

        let usuario_creador = propietario_usuarioUnico
        let fecha_modificacion =  fechaActual.toISOString()
        let fecha_creacion = fechaActual.toISOString()
        let arrayPregunta = pregunta
        
        try {
            const parametros = { usuario_creador, titulo, descripcion, fecha_modificacion, fecha_creacion }
            const resultadoFormulario = await constructorModels.guardarFormulario(parametros)
            console.log('resultado: ', resultadoFormulario);            
            const formulario = resultadoFormulario.insertId

            for (let i = 0; i < arrayPregunta.length; i++) {
                try {
                    let pregunta = arrayPregunta[i].n_pregunta
                let parametrosDePregunta = {pregunta,formulario}
                
                const resultadoPreguntas = await constructorModels.guardarPreguntas(parametrosDePregunta)
                console.log(resultadoPreguntas);
                } catch (error) {
                    console.log("error interno");
                    throw error
                }
            }

            res.status("200").json({"Info":{"Resultado":"Se agregó correctamente"}})
        } catch (error) {
            console.log("error externo");
            if (error.sqlMessage) {
                console.log(error.sqlMessage);
            } else {
                console.log(error);
            }
            res.status("404").json({"Info":{"Error":error}})
        }
        next()
    }

    async leerTodos(req, res, next){
        // Vamos a buscar todos los de las base de datos 
        let formulario = []
        let pregunta = []
        let guardado = false
        // primero necesitamos un model que nos devuelva todos los de base de datos 
        try {
            const resultado = await constructorModels.leerTodosFormularios()
            resultado.forEach(resultados => {
            
                guardado = resultado.filter(formularios => formularios.id == resultados.id)


                console.log(guardado);
            });
            
            res.send('nice').status("200")
        } catch (error) {
            
        }
        


    }
}

module.exports = new constructor();