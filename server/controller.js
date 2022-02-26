
const Task = require('./db/model') 
const path = require('path')


function getAll(request, response) {
  Task.find({}).then((result) => {
    // response.sendFile(path.join(__dirname, 'public', '/index.html'))
  })
}


function createNewTask(request, response, next) {
  const task = request.body
  if (!task.title) {
    return response.status(400).json({
      error: 'required "Title" field is missing'
    })
  }
  const newTask = new Task({
    title: task.title,
    description: task.description,
    date: new Date(),
    important: task.important || false
  })

  newTask.save().then((result) => {
    console.log(result)
  }).catch((err) => {
    next(err)
  })
}


function updateTask(request, response, next) {
  const { id } = request.params
  const task = request.body
  const newTaskInfo = {
    title: task.title,
    description: task.description,
    important: task.important
  }
  Task.findByIdAndUpdate(id, newTaskInfo, { new: true })
    .then((result) => {
      response.json(result)
    })
    .catch((err) => {
      next(err)
    })
}

function deleteTask(request, response, next) {
  const { id } = request.params
  Task.findByIdAndRemove(id).then((result) => {
    response.status(204).end()
  }).catch((err) => {
    next(err)
  })
}


module.exports = {
  getAll: getAll,
  createNewTask: createNewTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};
