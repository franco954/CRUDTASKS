
const { Schema, model } = require('mongoose')

// definimos en un esquema
const taskSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  important: Boolean
})

// seteo el esquema para indicarle como tiene que devolverme ciertos datos, quito los datos por defecto que devuelve mongo
taskSchema.set('toJSON', {

  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }

})

// creamos un modelo basado en nuestra esquema, este modelo servira para decirle a nivel app que todo lo que se genere tiene
// que seguir este esquema especifico

const Task = model('Task', taskSchema)

module.exports = Task
